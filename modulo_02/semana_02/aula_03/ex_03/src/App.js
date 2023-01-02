import { useState } from "react";
import Pokemon from "./Pokemon";

export default function App({ pokemons }) {
  const [selecionados, setSelecionados] = useState([]);

  // Cada pokémon possui as propriedades nome e número
  // Ex: { nome: "bulbasaur", numero: 1 }

  function clicouCard(pokemonNumber) {
    if (selecionados.length < 3 && !selecionados.includes(pokemonNumber)) {
      setSelecionados([...selecionados, pokemonNumber]);
    }
  }

  return (
    <>
      <h1>Escolha seu time de 3 pokémons</h1>

      <ul className="lista">
        {pokemons.map(p => (
          // adicionar clique e classe CSS no li (nome da classe: selecionado)
          <li
            key={p.numero}
            className={`pokecard${
              selecionados.includes(p.numero) ? " selecionado" : ""
            }`}
            onClick={() => clicouCard(p.numero)}>
            <Pokemon pokemon={p} />
          </li>
        ))}
      </ul>
    </>
  );
}
