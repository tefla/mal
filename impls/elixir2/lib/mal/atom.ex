defmodule Mal.Atom do


  def new(value) do
    # Create an Agent for this value
    {:ok, pid} = Agent.start_link(fn -> value end)
    pid
  end

  def deref(atom) do
    Agent.get(atom, fn state -> state end)
  end

  def reset(atom, value) do
    Agent.update(atom, fn _ -> value end)
    value
  end

  def swap(pid, %Mal.Function{value: func}, args) do
    Agent.get_and_update(pid, fn state ->
      func_args = [state | args]
      new_value = func.(func_args)
      {new_value, new_value}
    end)
  end

end
