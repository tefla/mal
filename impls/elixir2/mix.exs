defmodule Mal.MixProject do
  use Mix.Project

  def project do
    [
      app: :elixir2,
      version: "0.1.0",
      elixir: "~> 1.12",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
       default_task: "step9_try",
       escript: escript()
    ]
  end
  def escript do
    [main_module: Mix.Tasks.Step9Try]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    []
  end
end
