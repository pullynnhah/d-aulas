const megaSena = [8, 14, 28, 33, 45, 59];

const profsDriven = [
  { nome: "Diego", corFavorita: "Preto" },
  { nome: "Dina", corFavorita: "Amarelo" },
  { nome: "Frank", corFavorita: "Roxo" },
  { nome: "Lele", corFavorita: "Vermelho" },
  { nome: "Let", corFavorita: "Azul" },
  { nome: "Mr. Pink", corFavorita: "Rosa" },
  { nome: "Thi Code", corFavorita: "Verde" },
];

// Exercício 1 => utilizando map, crie um novo array de números
// que contenha os numeros do array megaSena multiplicados por 2
console.log(megaSena.map(num => num * 2));

// Exercício 2 => utilizando map, crie um novo array de strings que
// contenha apenas o nome dos profs da driven
console.log(profsDriven.map(profDriven => profDriven.nome));

// Exercício 3 => utilizando map, crie um novo array de <li> onde cada item
// diz o nome e a cor favorita da pessoa. Não é necessário mostrar na tela
// EX: <li>A cor favorita de Mr. Pink é Rosa</li>
console.log(
  profsDriven.map(
    profDriven =>
      `<li>A cor favorita de ${profDriven.nome} é ${profDriven.corFavorita}</li>`
  )
);
