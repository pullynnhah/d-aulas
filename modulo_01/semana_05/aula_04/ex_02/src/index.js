const listPokemons = [
  {
    name: "Bulbasaur",
    type: "grass",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    health: 90,
  },
  {
    name: "Charmander",
    type: "fire",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    health: 98,
  },
  {
    name: "Squirtle",
    type: "water",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    health: 88,
  },
  {
    name: "Blastoise",
    type: "water",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    health: 100,
  },
  {
    name: "Charizard",
    type: "fire",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    health: 110,
  },
];

renderizarPokemons(listPokemons);

function PokemonDiv(pokemon) {
  return `
    <div class="pokemon">  
      <img class="profile" src="${pokemon.img}">
      <span class="${pokemon.type}">${pokemon.name}</span>
      <div class="health">
        <img src="https://w7.pngwing.com/pngs/537/105/png-transparent-8-bit-color-heart-tar-miscellaneous-heart-poster.png">
        <span>${pokemon.health}</span>
        </div>
    </div>
  `;
}

function renderizarPokemons(pokemons) {
  let app = document.querySelector(".app");
  app.innerHTML = "";

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    app.innerHTML += PokemonDiv(pokemon);
  }
}

function filtrarPokemonsFogo() {
  const firePokemons = listPokemons.filter(
    (pokemon) => pokemon.type === "fire"
  );
  renderizarPokemons(firePokemons);
}

function aumentarHealthPokemons() {
  const pokemons = listPokemons.map((pokemon) => ({
    ...pokemon,
    health: pokemon.health + 20,
  }));
  renderizarPokemons(pokemons);
}
