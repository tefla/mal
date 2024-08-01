

defmodule Mal.Core do

  def list(ast), do: {:list, ast}
  def vector(ast), do: {:vector, ast}
end
