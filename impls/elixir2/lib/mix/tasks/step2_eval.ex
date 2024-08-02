
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
    case env[ast] do
      nil -> {:error, "Symbol not found: #{ast}"}
      val -> val
    end
  end



  defp eval_ast({:list, [fnSym | rest]}, env) do
    # This is a special case for now
    thefn = eval_ast(fnSym, env)
    args = rest |> Enum.map(fn(x) -> eval_ast(x, env) end)
    apply(thefn, args)
  end
  defp eval_ast([] = l, _), do: l
  defp eval_ast(base, _) when is_number(base), do: base

  defp eval(input, env) do
    eval_ast(input, env)
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
