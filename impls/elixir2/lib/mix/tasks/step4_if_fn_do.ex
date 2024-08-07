
defmodule Mix.Tasks.Step4IfFnDo do

  def run(_) do
    env = Mal.Env.new()
    Mal.Env.merge(env, Mal.Core.ns())
    loop(env)
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
      :not_found -> throw({:error , "Symbol #{ast} not found"})
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

  defp eval({:list, []} = empty_list, _env), do: empty_list

  defp eval({:list, ast}, env), do: eval_list(ast, env)

  defp eval(input, env) do
    eval_ast(input, env)
  end

  # Builtin Special Funcs

  # Define a symbol in the current environment
  defp eval_list([{:symbol, "def!"}, {:symbol, key}, value], env) do
    evaled = eval(value, env)
    Mal.Env.set(env, key, evaled)
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
  defp eval_list([{:symbol, "do"}, {:list, ast}], env) do
    ast
    |> List.delete(-1)
    |> Enum.each(&eval(&1, env))

    eval(List.last(ast), env)
  end

  # Evaluate the condition, if true, evaluate the true_case, else evaluate the false_case
  defp eval_list([{:symbol, "if"}, condition, true_case, false_case], env) do
    case eval(condition, env) do
      false -> eval(false_case, env)
      nil -> eval(false_case, env)
      _ -> eval(true_case, env)
    end
  end

  # Define a function in the current environment
  defp eval_list([{:symbol, "fn*"}, {:list, params}, body], env) do
    IO.puts("params: #{inspect(params)}")
    closure = fn (args) ->
      IO.puts("args: #{inspect(args)}")
      new_env = Mal.Env.new(env, params, args)
      IO.puts("new_env: #{inspect(new_env)}")
      eval(body, new_env)
    end

    %Mal.Function{value: closure}
  end



  defp eval_list(ast, env) do
    {:list, [func | args]} = eval_ast({:list, ast}, env)
    func.value.(args)
  end

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
    {:error, msg} -> "Error: #{msg}"
  end

end
