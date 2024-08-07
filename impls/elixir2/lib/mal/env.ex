
defmodule Mal.Env do
  def new(outer \\ nil, bindings \\ [], exprs \\ [])
  def new(outer, bindings, exprs) do
    {:ok, pid} = Agent.start_link(fn ->
      %{outer: outer, env: %{}}
    end)
    set_binding(pid, bindings, exprs)
    pid
  end

  defp set_binding(env, [], []), do: env
  defp set_binding(env, [{:symbol, key}| keys], [value | values]) do
    set(env, key, value)
    set_binding(env, keys, values)
  end
  def set(env, key, value) do
    Agent.update(env, fn state ->
      %{state | env: Map.put(state.env, key, value)}
    end)
  end
  def find(env, key) do
    Agent.get(env, fn state ->
      case Map.has_key?(state.env, key) do
        true -> env
        false -> state.outer && find(state.outer, key)
      end
    end)
  end
  def retrieve_key(env, key) do
    Agent.get(env, fn state ->
      case Map.fetch(state.env, key) do
        {:ok, value} -> {:ok, value}
        :error -> :not_found
      end
    end)
  end
  def get(env, key) do
    case find(env, key) do
      nil -> :not_found
      env -> retrieve_key(env, key)
    end
  end

  # Merge a dictionary of bindings into the current environment
  def merge(env, dict) do
    Agent.update(env, fn state ->
      %{state | env: Map.merge(state.env, dict)}
    end)
  end
end
