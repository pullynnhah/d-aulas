import CardUsuario from './CardUsuario';

export default function ListaUsuarios({ usuarios, setUsuarios }) {
  function deleteUser(idx) {
    setUsuarios(usuarios.filter((_, i) => i !== idx));
  }

  return (
    <div className="lista-usuarios">
      <h1>Pessoas cadastradas</h1>
      <ul>
        {usuarios.map((u, i) => (
          <CardUsuario key={i} user={u} deleteUser={() => deleteUser(i)} />
        ))}
      </ul>
    </div>
  );
}
