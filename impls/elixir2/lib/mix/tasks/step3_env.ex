
defmodule Mix.Tasks.Step3Env do

  def run(_) do
    env = Mal.Env.new()
    Mal.Env.set(env, "+", fn (a, b) -> a + b end)
    Mal.Env.set(env, "-", fn (a, b) -> a - b end)
    Mal.Env.set(env, "*", fn (a, b) -> a * b end)
    Mal.Env.set(env, "/", fn (a, b) -> a / b end)
    read_eval_print("(let* [x 10 y 20] (+ x y))", env)
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

  # Builtin Funcs
  defp eval_list([{:symbol, "def!"}, {:symbol, key}, value], env) do
    evaled = eval(value, env)
    Mal.Env.set(env, key, evaled)
    evaled
  end


  defp eval_list([{:symbol, "let*"}, {_, bindings}, body], env) do
    new_env = Mal.Env.new(env)
    eval_bindings(bindings, new_env)
    eval(body, new_env)
  end

  defp eval_list(ast, env) do
    {:list, [func | args]} = eval_ast({:list, ast}, env)
    apply(func, args)
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
