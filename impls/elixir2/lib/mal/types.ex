defmodule Mal.Types do
  def integer?(input) do
    Regex.match?(~r/^-?[0-9]+$/, input)
  end
  def hash_map(list) do
    map = list
    |> Enum.chunk_every(2)
    |> Enum.map(&List.to_tuple/1)
    |> Enum.into(%{})

    {:map, map}
  end

  def list(ast) do
    {:list, ast}
  end
  def vector(args), do: {:vector, args}
  def symbol([name]), do: {:symbol, name}



end
defmodule Mal.Function do

  defstruct value: nil, macro: false
end
