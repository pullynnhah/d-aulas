import { useState } from "react";

export default function CadastrarUsuario({ usuarios, setUsuarios }) {
  const [inputNome, setInputNome] = useState("");
  const [inputAvatar, setInputAvatar] = useState("");

  function criarUsuario() {
    setUsuarios([...usuarios, { nome: inputNome, avatar: inputAvatar }]);
    setInputAvatar("");
    setInputNome("");
  }

  return (
    <div className="cadastrar-usuario">
      <h1>Insira uma nova pessoa</h1>
      <input
        placeholder="Insira o Nome"
        value={inputNome}
        onChange={e => setInputNome(e.target.value)}
      />
      <input
        placeholder="Link da imagem"
        value={inputAvatar}
        onChange={e => setInputAvatar(e.target.value)}
      />
      <button onClick={criarUsuario}>Criar Usuario</button>
    </div>
  );
}
