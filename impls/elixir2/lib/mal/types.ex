defmodule Mal.Types do
  def integer?(input) do
    Regex.match?(~r/^-?[0-9]+$/, input)
  end
  def hash_map(list) do
    map = list
    |> Enum.chunk_every(2)
    |> Enum.map(&List.to_tuple/1)
    |> Enum.into(%{})

    {:map, map, nil}
  end

  def list(ast) do
    {:list, ast, nil}
  end
  def list?([{:list, _}]), do: true
  def list?(_), do: false

  def vector(args), do: {:vector, args, nil}
  def vector?([{type, _, _meta}]), do: type == :vector
  def vector?(_), do: false
  def symbol([name]), do: {:symbol, name}
  def symbol?([{type, _, _meta}]), do: type == :symbol
  def symbol?(_), do: false



end
defmodule Mal.Function do

  defstruct value: nil, macro: false, meta: nil
end
