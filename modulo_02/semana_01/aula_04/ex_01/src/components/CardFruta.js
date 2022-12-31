export default function CardFruta(props) {
  return (
    <div class="fruta">
      <img src={props.foto} alt={props.nomeDaFruta} />
      <p>{props.nomeDaFruta}</p>
    </div>
  );
}
