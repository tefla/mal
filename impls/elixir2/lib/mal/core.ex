

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
      "=" => &equals/1,
      "<" => fn [a, b] -> a < b end,
      "<=" => fn [a, b] -> a <= b end,
      ">" => fn [a, b] -> a > b end,
      ">=" => fn [a, b] -> a >= b end,
      "list" => &list/1,
      "list?" => &list?/1,
      "pr-str" => &pr_str/1,
      "str" => &str/1,
      "prn" => &prn/1,
      "println" => &println/1,
      "count" => &count/1,
      "empty?" => &empty/1,
    }

    convert(internal)

  end
  defp list?([{:list, _}]), do: true
  defp list?(_), do: false


  defp count([{type, list}]) when type in [:list, :vector] do
    Enum.count(list)
  end
  defp count([nil]), do: 0
  defp empty([{type, list}]) when type in [:list, :vector] do
    Enum.empty?(list)
  end

  ## Equality functions
  # when it is a map
  defp convert_list({type, a}) when type == :map do
    {:map, Enum.map(a, fn {k, v} -> {k, convert_list(v)} end)}
  end
  # when it is a list or vector
  defp convert_list({type, a}) when type in [:list, :vector] do
    {:list, Enum.map(a, &convert_list/1)}
  end
  defp convert_list(a), do: a


  defp equals([a, b]) do
    convert_list(a) == convert_list(b)
  end
  # String functions

  defp join_list(list, print_readably, sep) do
    list
    |> Enum.map(&Printer.print_str(&1, print_readably))
    |> Enum.join(sep)
  end
  # call Printer.print_str on each node, and join the results
  defp pr_str(ast), do: join_list(ast, true, " ")
  defp str(ast), do: join_list(ast, false, "")

  defp prn(ast) do
    IO.puts(join_list(ast, true, " "))
    nil
  end

  defp println(ast) do
    IO.puts(join_list(ast, false, " "))
    nil
  end

  # Helper function to convert a function to a Mal.Function struct
  defp convert(map) do
    for {name, func} <- map, into: %{} do
      {name, to_mal_function(func)}
    end
  end

  defp to_mal_function(fun) do
    %Mal.Function{value: fun}
  end

end
