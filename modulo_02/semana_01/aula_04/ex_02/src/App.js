export default function App() {
  function selecionarPrimeiraOpcao(option) {
    alert(
      option === "bolacha"
        ? "Você escolheu sabiamente"
        : "Você escolheu erradamente"
    );
  }

  function selecionarSegundaOpcao(option) {
    alert(
      option === "nescau"
        ? "Você escolheu sabiamente"
        : "Você escolheu erradamente"
    );
  }

  return (
    <>
      <div class="grupo">
        <h1>Escolha a opção correta</h1>
        <button onClick={() => selecionarPrimeiraOpcao("bolacha")}>
          Bolacha
        </button>
        <button onClick={() => selecionarPrimeiraOpcao("biscoito")}>
          Biscoito
        </button>
      </div>

      <div class="grupo">
        <h1>Escolha a opção correta</h1>
        <button onClick={() => selecionarSegundaOpcao("toddy")}>Toddy</button>
        <button onClick={() => selecionarSegundaOpcao("nescau")}>Nescau</button>
      </div>
    </>
  );
}
