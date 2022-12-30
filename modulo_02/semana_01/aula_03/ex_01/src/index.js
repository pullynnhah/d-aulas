import ReactDOM from "react-dom/client";

import Navbar from "./components/Navbar";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";

function App() {
  return (
    <div>
      <Navbar />
      <Conteudo />
      <Rodape />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);
