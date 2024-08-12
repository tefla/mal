
defmodule Mix.Tasks.Step9Try do
  alias Mal.Function
  import Mal.Types
  def run(args) do
    # Repl loop
    env = Mal.Env.new()

    bootstrap_env(args, env)
    loop(env)
  end
  defp load_file(file, env) do
    read_eval_print("(load-file \"#{file}\")", env)
    exit(:normal)
  end
  defp bootstrap_env(args, env) do
    Mal.Env.merge(env, Mal.Core.ns())
    Mal.Env.set(env, "eval", %Mal.Function{value: fn ([ast]) -> eval(ast, env) end})
    read_eval_print("""
      (def! not (fn* (a)
        (if a false true)))
    """, env)
    read_eval_print("""
      (def! load-file (fn* (f)
        (eval (read-string
          (str
            "(do "
            (slurp f)
            "\nnil)")))))
    """, env)
    read_eval_print("""
      (defmacro! cond (fn* (& xs)
        (if (> (count xs) 0)
          (list 'if (first xs) (if (> (count xs) 1) (nth xs 1) (throw "odd number of forms to cond")) (cons 'cond (rest (rest xs)))))))
    """, env)

    read_eval_print("""
      (defmacro! and (fn* (a b)
        (if a b false)))
    """, env)

    read_eval_print("""
       (def! add2 (fn* [x] (+ x 2)))
    """, env)

    case args do
      [file | args] ->
        Mal.Env.set(env, "*ARGV*", {:list, args})
        load_file(file, env)
      _ ->
        Mal.Env.set(env, "*ARGV*", {:list, []})
    end
  end

  defp loop(env) do
    IO.write(:stdio, "user> ")
    IO.read(:stdio, :line)
      |> (&read_eval_print(&1, env)).()
      |> IO.puts

    loop(env)
  end

  defp read(input) do
    Mal.Reader.read_str(input)
  end

  defp eval_ast({:symbol, ast}, env) do
    case Mal.Env.get(env, ast) do
      {:ok, val} -> val
      :not_found -> throw({:error , "'#{ast}' not found"})
    end
  end
  defp eval_ast({:list, ast}, env) do
    {:list, Enum.map(ast, &eval(&1, env))}
  end
  defp eval_ast({:vector, ast}, env), do: {:vector, Enum.map(ast, &eval(&1, env))}
  defp eval_ast({:map, ast}, env) do
    map = for {key, value} <- ast, into: %{} do
      {key, eval(value, env)}
    end
    {:map, map}
  end
  defp eval_ast(ast, _env), do: ast

  defp macro_call?({:list, [{:symbol, key} | _tail]}, env) do
    case Mal.Env.get(env, key) do
      {:ok, %Function{macro: true}} -> true
      _ -> false
    end
  end
  defp macro_call?(_ast, _env), do: false

  defp do_macro_call({:list, [{:symbol, key} | tail]}, env) do
    {:ok, %Function{value: macro, macro: true}} = Mal.Env.get(env, key)
    res = macro.(tail)
    res
      |> macroexpand(env)
  end

  defp macroexpand(ast, env) do
    if macro_call?(ast, env) do
      do_macro_call(ast, env)
    else
      ast
    end
  end

  defp eval(ast, env) do
    case Mal.Env.get(env, "DEBUG") do
      {:ok, _} -> IO.inspect(ast)
      _ -> nil
    end

    _eval(ast, env)
  end

  defp _eval({:list, []} = empty_list, _env), do: empty_list

  defp _eval({:list, _ast} = ast, env) do
    case macroexpand(ast, env) do
      {:list, list} -> eval_list(list, env)
      ast -> eval_ast(ast, env)
    end
  end

  defp _eval(input, env) do
    eval_ast(input, env)
  end

  # Builtin Special Funcs
  defp eval_list([{:symbol, "macroexpand"}, ast], env), do: macroexpand(ast, env)

  # Define a symbol in the current environment
  defp eval_list([{:symbol, "def!"}, {:symbol, key}, value], env) do
    evaled = eval(value, env)
    Mal.Env.set(env, key, evaled)
    evaled
  end

  defp eval_list([{:symbol, "defmacro!"}, {:symbol, name}, ast], env) do
    evaled = %{eval(ast, env) | macro: true}
    Mal.Env.set(env, name, evaled)
    evaled
  end

  # Define a new environment with the current environment as parent
  # And evaluate the body in the new environment
  defp eval_list([{:symbol, "let*"}, {_, bindings}, body], env) do
    #_zipped = Enum.unzip(bindings)
    new_env = Mal.Env.new(env)

    eval_bindings(bindings, new_env)
    eval(body, new_env)
  end

  # Evaluate the list of expressions in order, and return the last one
  defp eval_list([{:symbol, "do"}| ast], env) do
    ast
    |> List.delete_at(-1)
    |> list
    |> eval_ast(env)

    eval(List.last(ast), env)
  end

  # Evaluate the condition, if true, evaluate the true_case, else evaluate the false_case
  defp eval_list([{:symbol, "if"}, condition, true_case | false_case], env) do
    case eval(condition, env) do
      n when n == nil or n == false -> case false_case do
        [] -> nil
        [body] -> eval(body, env)
      end
      _ -> eval(true_case, env)
    end
  end

  # Define a function in the current environment
  defp eval_list([{:symbol, "fn*"}, {type, params}, body], env) when type in [:list, :vector] do
    closure = fn (args) ->
      new_env = Mal.Env.new(env, params, args)
      eval(body, new_env)
    end

    %Mal.Function{value: closure}
  end

  # Quoting and Quasi-quoting
  defp eval_list([{:symbol, "quote"}, ast], _), do: ast

  defp eval_list([{:symbol, "quasiquote"}, ast], env) do
    ast
    |> quasiquote
    |> eval(env)
  end
  defp eval_list([{:symbol, "quasiquoteexpand"}, ast], _) do
    quasiquote(ast)
  end

  defp eval_list([{:symbol, "try*"}, body, {:list, [{:symbol, "catch*"}, {:symbol, key}, catch_body]}], env) do
    try do
      eval(body, env)
    catch
      {:error, msg} ->
        new_env = Mal.Env.new(env)
        Mal.Env.set(new_env, key, msg)
        eval(catch_body, new_env)
    end
  end

  defp eval_list([{:symbol, "try*"}, body], env) do
    try do
      eval(body, env)
    catch
      e -> e
    end
  end
  # default eval_list
  defp eval_list(ast, env) do
    {:list, [func | args]} = eval_ast({:list, ast}, env)
    func.value.(args)
  end

  defp quasiquote({:list, [{:symbol, "unquote"}, ast]}), do: ast
  defp quasiquote({:list, ast}), do: qq_foldr(ast)
  defp quasiquote({:vector, ast}), do: list([{:symbol, "vec"}, qq_foldr(ast)])
  defp quasiquote({:symbol, ast}), do: list([{:symbol, "quote"}, {:symbol, ast}])
  defp quasiquote({:map, ast}), do: list([{:symbol, "quote"}, {:map, ast}])
  defp quasiquote(ast), do: ast


  defp qq_foldr([]), do: list([])
  defp qq_foldr([head | tail]), do: qq_loop(head, qq_foldr(tail))

  defp qq_loop({:list, [{:symbol, "splice-unquote"}, ast]}, acc), do: list([{:symbol, "concat"}, ast, acc])
  defp qq_loop(ast, acc), do: list([{:symbol, "cons"}, quasiquote(ast), acc])

#  defp qq_loop([])
  defp eval_bindings([], _), do: []
  defp eval_bindings([{:symbol, key}, value | rest], env) do
    Mal.Env.set(env, key, eval(value, env))
    eval_bindings(rest, env)
  end


  defp print(input) do
    Mal.Printer.print_str(input)
  end

  defp read_eval_print(:eof, _), do: exit(:normal)
  defp read_eval_print(line, env) do
    # env = %{
    #   "+" => fn (a, b) -> a + b end,
    #   "-" => fn (a, b) -> a - b end,
    #   "*" => fn (a, b) -> a * b end,
    #   "/" => fn (a, b) -> a / b end,
    # }

    read(line)
      |> (&eval(&1, env)).()
      |> print
  catch
    e -> print(e)
  end

end
