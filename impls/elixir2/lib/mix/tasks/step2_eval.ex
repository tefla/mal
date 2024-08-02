
defmodule Mix.Tasks.Step2Eval do
  def run(_), do: loop()

  defp loop do
    IO.write(:stdio, "user> ")
    IO.read(:stdio, :line)
      |> read_eval_print
      |> IO.puts

    loop()
  end

  defp read(input) do
    Mal.Reader.read_str(input)
  end

  defp eval_ast({:symbol, ast}, env) do
    case Map.fetch(env, ast) do
      {:ok, val} -> val
      :error -> throw({:error , "Symbol not found"})
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

  defp eval_list(ast, env) do
    {:list, [func | args]} = eval_ast({:list, ast}, env)
    apply(func, args)
  end
  defp print(input) do
    Mal.Printer.print_str(input)
  end

  defp read_eval_print(:eof), do: exit(:normal)
  defp read_eval_print(line) do
    env = %{
      "+" => fn (a, b) -> a + b end,
      "-" => fn (a, b) -> a - b end,
      "*" => fn (a, b) -> a * b end,
      "/" => fn (a, b) -> a / b end,
    }
    read(line)
      |> (&eval(&1, env)).()
      |> print
  catch
    {:error, msg} -> "Error: #{msg}"
  end

end
