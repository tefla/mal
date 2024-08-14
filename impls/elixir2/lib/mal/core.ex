

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
      "read-string" => &read_string/1,
      "slurp" => &slurp/1,
      "atom" => &atom/1,
      "deref" => &deref/1,
      "reset!" => &reset/1,
      "swap!" => &swap/1,
      "atom?" => &atom?/1,
      "cons" => &cons/1,
      "concat" => &concat/1,
      "vec" => &vec/1,
      "nth" => &nth/1,
      "first" => &first/1,
      "rest" => &rest/1,
      "throw" => &mal_throw/1,
      "apply" => &apply/1,
      "map" => &map/1,
      "nil?" => &nil?/1,
      "true?" => &true?/1,
      "false?" => &false?/1,
      "symbol?" => &symbol?/1,
      "symbol" => &symbol/1,
      "keyword" => &keyword/1,
      "keyword?" => fn [kw] -> is_atom(kw) end,
      "vector" => &vector/1,
      "vector?" => &vector?/1,
      "sequential?" => &sequential?/1,
      "hash-map" => &hash_map/1,
      "map?" => &map?/1,
      "assoc" => &assoc/1,
      "dissoc" => &dissoc/1,
      "keys" => &keys/1,
      "vals" => &values/1,
      "get" => &get/1,
      "contains?" => &contains_key/1,
      "readline" => &readline/1,

      "time-ms" => &time_ms/1,
      "fn?" => &fn?/1,
      "string?" => &string?/1,
      "number?" => &number?/1,
      "seq" => &seq/1,
      "conj" => &conj/1,
      "meta" => &meta/1,
      "with-meta" => &with_meta/1,
      "." => &alias_ns/1
    }

    convert(internal)

  end

  defp meta([{_type, _ast, meta}]), do: meta
  defp meta([%Mal.Function{meta: meta}]), do: meta
  defp meta(_), do: nil

  defp with_meta([{type, ast, _old_meta}, meta]), do: {type, ast, meta}
  defp with_meta([%Mal.Function{} = func, meta]), do: %{func | meta: meta}
  defp with_meta(_), do: nil

  # Atom functions
  defp atom([value]) do
    new_atom = Mal.Atom.new(value)
    {:atom, new_atom}
  end
  defp deref([{:atom, atom}]) do
    Mal.Atom.deref(atom)
  end
  defp reset([{:atom, atom}, value]) do
    Mal.Atom.reset(atom, value)
  end
  defp swap([{:atom, pid}, fun | args]) do
    Mal.Atom.swap(pid, fun, args)
  end

  # Bootstrap functions
  defp read_string([str]) do
    Mal.Reader.read_str(str)
  end
  defp slurp([file]) do
    File.read!(file)
  end

  defp nth([{_, list}, n])  do
    case Enum.fetch(list, n) do
      {:ok, value} -> value
      :error -> throw({:error, "Index out of bounds"})
    end
  end
  defp mal_throw([ast]) do
    throw({:error, ast})
  end
  defp first([{type, [h|_t]}]) when type in [:vector, :list] do
    h
  end
  defp first([_]), do: nil
  defp rest([{type, [_h|t]}]) when type in [:vector, :list] do
    {:list, t}
  end
  defp rest([_]), do: {:list, []}

  defp count([{type, list}]) when type in [:list, :vector] do
    Enum.count(list)
  end
  defp count([nil]), do: 0
  defp empty([{type, list}]) when type in [:list, :vector] do
    Enum.empty?(list)
  end
  defp vec([{type, list}]) when type in [:list, :vector] do
    {:vector, list}
  end
  # cons: this function takes a list as its second parameter and returns a new list that has the first argument prepended to it.
  defp cons([a, {type, b}]) when type in [:list, :vector] do
    {:list, [a | b]}
  end

  #concat: this functions takes 0 or more lists as parameters and returns a new list that is a concatenation of all the list parameters.
  defp concat(lists) do
    {:list, Enum.reduce(lists, [], fn {_, list}, acc -> acc ++ list end)}
  end

  defp apply([%Mal.Function{value: function} | tail]), do: do_apply(function, tail)
  defp apply([function | tail]), do: do_apply(function, tail)
  #apply: takes at least two arguments. The first argument is a function and the last argument is a list (or vector). The function may be either a built-in core function, an user function constructed with the fn* special form, or a macro, not distinguished from the underlying user function). The arguments between the function and the last argument (if there are any) are concatenated with the final argument to create the arguments that are used to call the function. The apply function allows a function to be called with arguments that are contained in a list (or vector). In other words, (apply F A B [C D]) is equivalent to (F A B C D).
  defp do_apply(function, tail) do
    [{_type , ast} | rev_args] = Enum.reverse(tail)
    args = Enum.reverse(rev_args)
    func_args = args ++ ast
    function.(func_args)
  end

  defp map([%Mal.Function{value: f}, {type, list, _meta}]) when type in [:list, :vector] do
    new_list = for el <- list, into: [] do
      f.([el])
    end
    list(new_list)
  end
  defp map([f, {type, list}]) when type in [:list, :vector] do
    new_list = for el <- list, into: [] do
      f.([el])
    end
    {:list, new_list}
  end

  defp nil?([nil]), do: true
  defp nil?(_), do: false

  defp true?([true]), do: true
  defp true?(_), do: false
  defp false?([false]), do: true
  defp false?(_), do: false
  defp atom?([{type, _}]), do: type == :atom
  defp atom?(_), do: false
  defp sequential?([{type, _, _meta}]), do: type in [:list, :vector]
  defp sequential?(_), do: false
  defp map?([{type, _, _meta}]), do: type == :map
  defp map?(_), do: false

  defp assoc([{:map, map, meta}, first, second| rest]) do
    new_map = Map.put(map, first, second)
    assoc([{:map, new_map, meta} | rest])
  end
  defp assoc([{:map, map, meta}]), do: {:map, map, meta}

  defp dissoc([{:map, map, meta}| keys]), do:
    {:map, Map.drop(map, keys), meta}

  defp keys([{:map, map, meta}]), do:
    {:list, Map.keys(map), meta}

  defp values([{:map, map}, meta]), do:
    {:list, Map.values(map), meta}

  defp get([{:map, map, _meta}, key]) do
    case Map.fetch(map, key) do
      {:ok, value} -> value
      :error -> nil
    end
  end
  defp get([_map, _key]), do: nil
  defp contains_key([{:map, map, _}, key]) do
    Map.has_key?(map, key)
  end
  defp keyword([kw]) when is_atom(kw), do: kw
  defp keyword([str]) do
    String.to_atom(str)
  end



  defp readline([prompt]) do
    IO.write(prompt)
    IO.read(:line)
  end

  # TODO
  # time-ms, meta, with-meta, fn? string?, number?, seq, and conj
  defp time_ms([_]), do: System.os_time(:millisecond)
  defp fn?([_]), do: :not_implemented
  defp string?([_]), do: :not_implemented
  defp number?([_]), do: :not_implemented
  defp seq([_]), do: :not_implemented
  defp conj([_]), do: :not_implemented



  defp alias_ns([ns]) do
    :"Elixir.#{ns}"
  end
  ## Equality functions
  # when it is a map
  defp convert_list({type, a, meta}) when type == :map do
    {:map, Enum.map(a, fn {k, v} -> {k, convert_list(v)} end), meta}
  end
  # when it is a list or vector
  defp convert_list({type, a, meta}) when type in [:list, :vector] do
    {:list, Enum.map(a, &convert_list/1), meta}
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
