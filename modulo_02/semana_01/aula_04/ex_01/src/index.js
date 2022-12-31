import ReactDOM from "react-dom/client";
import CardFruta from "./components/CardFruta";

function App() {
  const frutas = [
    {
      nomeDaFruta: "Amora",
      foto: "https://www.liderfrutas.com/images/products/1641556859851.jpg",
    },
    {
      nomeDaFruta: "Manga",
      foto: "https://hiperideal.vteximg.com.br/arquivos/ids/167726/62332.jpg?v=636615816353730000",
    },
    {
      nomeDaFruta: "Caqui",
      foto: "https://www.quitandatomio.com.br/upload/conheca-os-beneficios-do-caqui-rama-forte.jpg",
    },
  ];

  return (
    <div class="app">
      <h1>Melhores Frutas</h1>
      {frutas.map(fruta => (
        <CardFruta {...fruta} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);
