
defmodule Mal.Reader do
  import Mal.Core
  def read_str(input) do
    case tokenise(input) do
      [] -> nil
      tokens -> tokens
        |> read_form
    end
  end

  defp tokenise(input) do
    regex =  ~r/[\s,]*(~@|[\[\]{}()'`~^@]|"(?:\\.|[^\\"])*"?|;.*|[^\s\[\]{}('"`,;)]*)/
    Regex.scan(regex, input, capture: :all_but_first)
      |> List.flatten
      |> List.delete_at(-1) # Empty string
      |> Enum.filter(fn token -> not String.starts_with?(token, ";") end)
  end

  defp read_form([next | rest] = tokens) do
    case next do
      "(" -> read_list(tokens)
      ")" -> throw({:error, "unexpected )"})
      _ ->
        token = read_atom(next)
        {token, rest}
    end
  end

  defp read_list([_ | tokens]) do
    {ast, rest} = do_read_sequence(tokens, [], "(", ")")
    {list(ast), rest}
  end

  defp do_read_sequence([], _acc, _start_sep, end_sep), do: throw({:error, "Epected #{end_sep}, got EOF"})
  defp do_read_sequence([head | tail] = tokens, acc, start_sep, end_sep) do
    cond do
      String.starts_with?(head, end_sep)->
        {Enum.reverse(acc), tail}
      true ->
        {token, rest} = read_form(tokens)
        do_read_sequence(rest, [token | acc], start_sep, end_sep)
    end
  end

  defp read_atom("nil"), do: nil
  defp read_atom("true"), do: true
  defp read_atom("false"), do: false
end