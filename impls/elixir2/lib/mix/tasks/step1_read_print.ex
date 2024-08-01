
defmodule Mix.Tasks.Step1ReadPrint do
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

  defp eval(input) do
    input
  end

  defp print(input) do
    Mal.Printer.print_str(input)
  end

  defp read_eval_print(:eof), do: exit(:normal)
  defp read_eval_print(line) do
    read(line)
      |> eval
      |> print
  end

end

