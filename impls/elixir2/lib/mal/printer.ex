
defmodule Mal.Printer do
  def print_str(mal, print_readably \\ true)
  def print_str(mal, false) when is_bitstring(mal), do: mal
  def print_str(mal, true) when is_bitstring(mal), do: inspect(mal)
  def print_str({:list, mal, _}, print_readably), do: "(#{print_list(mal, print_readably)})"

  defp print_list(list, print_readably) do
    list
      |> Enum.map(fn(x) -> print_str(x, print_readably) end)
      |> Enum.join(" ")

  end
end

