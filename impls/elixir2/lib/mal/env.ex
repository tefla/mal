
defmodule Mal.Env do
  def new(outer \\ nil)
  def new(outer) do
    {:ok, pid} = Agent.start_link(fn ->
      %{outer: outer, env: %{}}
    end)
    pid
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
end
