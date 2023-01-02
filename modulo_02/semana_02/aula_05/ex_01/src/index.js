import React from "react";
import ReactDOM from "react-dom/client";

import "./css/reset.css";
import "./css/style.css";

import dog from "./img/cao.png";
import cat from "./img/gato.png";

function App() {
  return (
    <div class="page">
      <div class="member">
        <div class="info">
          <img src={dog} alt="Cão" />
          <div class="name">Cão</div>
        </div>
      </div>

      <div class="member">
        <div class="info">
          <img src={cat} alt="Gato" />
          <div class="name">Gato</div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
