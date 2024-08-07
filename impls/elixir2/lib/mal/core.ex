

defmodule Mal.Core do
  import Mal.Types
  alias Mal.Printer

  def ns do
    internal = %{
      "+" => fn [a, b] -> a + b end,
      "-" => fn [a, b] -> a - b end,
      "*" => fn [a, b] -> a * b end,
      "/" => fn [a, b] -> a / b end,
      "nil" => nil,
      "true" => true,
      "false" => false,
      "=" => fn [a, b] -> a == b end,
      "<" => fn [a, b] -> a < b end,
      "<=" => fn [a, b] -> a <= b end,
      ">" => fn [a, b] -> a > b end,
      ">=" => fn [a, b] -> a >= b end,
      "list" => &list/1,
      "list?" => &list?/1,
      "prn" => fn [a] -> Printer.print_str(a, true) end
    }

    convert(internal)

  end

  defp convert(map) do
    for {name, func} <- map, into: %{} do
      {name, to_mal_function(func)}
    end
  end
  defp to_mal_function(fun) do
    %Mal.Function{value: fun}
  end

end
