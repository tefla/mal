defmodule Mal.Types do
  def integer?(input) do
    Regex.match?(~r/^-?[0-9]+$/, input)
  end
  def hash_map(ast) do
    map = ast
      |> Enum.chunk_every(2)
      |> Enum.map(&List.to_tuple/1)
      |> Enum.into(%{})

    {:map, map}
  end

  def list(ast) do
    {:list, ast}
  end

  def vector(ast) do
    {:vector, ast}
  end
  def vector?({:vector, _}), do: true
  def vector?(_), do: false
end

defmodule Mal.Function do
  defstruct value: nil, macro: false
end
