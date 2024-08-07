
defmodule Mal.Printer do
  def print_str(mal, print_readably \\ true)
  def print_str(mal, false) when is_bitstring(mal), do: mal
  def print_str(mal, true) when is_bitstring(mal), do: inspect(mal)
  def print_str(mal, true) when is_function(mal), do: "#Function"
  def print_str(%Mal.Function{value: _value}, _), do: "#Function"
  def print_str({:list, mal}, print_readably), do: "(#{print_list(mal, print_readably)})"
  def print_str({:vector, mal}, print_readably), do: "[#{print_list(mal, print_readably)}]"
  def print_str({:map, mal}, print_readably), do: "{#{print_map(mal, print_readably)}}"
  def print_str({:symbol, mal}, _), do: mal
  def print_str({:error, msg}, _), do: "Error: #{msg}"
  def print_str(mal, _) when is_atom(mal), do: inspect(mal)
  def print_str(mal, _) when is_number(mal), do: inspect(mal)

  defp print_list(list, print_readably) do
    list
      |> Enum.map(fn(x) -> print_str(x, print_readably) end)
      |> Enum.join(" ")

  end

  defp print_map(map, print_readably) do
    map
      |> Enum.map(fn({k, v}) -> "#{print_str(k, print_readably)} #{print_str(v, print_readably)}" end)
      |> Enum.join(" ")

  end
end
