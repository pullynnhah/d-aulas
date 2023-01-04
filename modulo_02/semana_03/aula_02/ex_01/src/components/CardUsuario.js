export default function CardUsuario({ user, deleteUser }) {
  return (
    <li className="card-usuario">
      <img src={user.avatar} alt="" />
      {user.nome}
      <button onClick={deleteUser}>X</button>
    </li>
  );
}
