import './style.css';

import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState("");

  return (
    <div className="conteudo">
      <h1>Seu nome ao contrário!</h1>
      <InserirNome nome={nome} setNome={setNome} />
      <MostrarNome nome={nome} />
    </div>
  );
}

function InserirNome({ nome, setNome }) {
  return (
    <div className="inserir-nome">
      <input value={nome} onChange={e => setNome(e.target.value)} />
    </div>
  );
}

function MostrarNome({ nome }) {
  return (
    <div className="mostrar-nome">
      <h2>{nome.split("").reverse()}</h2>
    </div>
  );
}
