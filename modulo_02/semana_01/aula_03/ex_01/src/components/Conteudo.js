export default function Conteudo() {
  return (
    <div className="posts">
      <Post src="img/asshole-fish.jpeg" title="Parabéns, evolução" />
      <Post src="img/polite-bunny.jpeg" title="Iti malia" />
    </div>
  );
}

function Post(props) {
  const { src, title } = props;
  return (
    <div className="post">
      <img src={src} alt={title} />
      <h1 className="titulo">{title}</h1>
    </div>
  );
}
