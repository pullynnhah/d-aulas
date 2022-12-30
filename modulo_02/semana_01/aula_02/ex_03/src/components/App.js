export default function App() {
  const name = prompt("Qual seu nome?");
  return (
    <div>
      <div class="wordart rainbow">
        <div class="text">Bem vindo, {name ? name : "Anônimo(a)"}!</div>
      </div>
      <div class="wordart blues">
        <div class="text">Como vai você?</div>
      </div>
    </div>
  );
}
