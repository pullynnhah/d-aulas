function buscarDados() {
  const promise = axios.get("https://rickandmortyapi.com/api/character/118");
  promise.then(renderizarPersonagem);
}

function renderizarPersonagem(personagem) {
  var elementoImagem = document.querySelector(".imagem-do-personagem");
  var elementoNome = document.querySelector(".nome");
  var elementoEspecie = document.querySelector(".especie");

  elementoImagem.src = personagem.data.image;
  elementoNome.textContent = personagem.data.name;
  elementoEspecie.textContent = personagem.data.species;
}
