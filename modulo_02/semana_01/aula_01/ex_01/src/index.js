import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Lista de Compras</h1>
      <ul>
        <li>Pão</li>
        <li>Banana</li>
        <li>Milk Shake de Doce de Leite</li>
        <li>Nutella</li>
        <li>Sorvete</li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);
