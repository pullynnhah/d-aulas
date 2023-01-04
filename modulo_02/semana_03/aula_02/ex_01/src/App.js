import './styles.css';

import { useState } from 'react';

import CadastrarUsuario from './components/CadastrarUsuario';
import ListaUsuarios from './components/ListaUsuarios';

const usuariosIniciais = [
  {
    nome: "Maria Silva",
    avatar: "https://picsum.photos/400/400?a=1",
  },
  {
    nome: "João Alves",
    avatar: "https://picsum.photos/400/400?a=2",
  },
];

export default function App() {
  const [usuarios, setUsuarios] = useState(usuariosIniciais);

  return (
    <>
      <ListaUsuarios usuarios={usuarios} setUsuarios={setUsuarios} />
      <hr />
      <CadastrarUsuario usuarios={usuarios} setUsuarios={setUsuarios} />
    </>
  );
}
