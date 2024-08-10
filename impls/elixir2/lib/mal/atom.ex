defmodule Mal.Atom do

  @agent Agent.start_link(fn -> %{} end)

  def new(name, value) do
    Agent.update(@agent, fn state -> Map.put(state, name, value) end)
  end
end
