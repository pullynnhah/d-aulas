// mport axios from "axios";
i;
const request = axios.get("https://api.quotable.io/random");
const root = document.querySelector(".root");

request.then(response => {
  root.innerHTML = `
    <p><strong>Autor:</strong> ${response.data.author}</p>
    <p><strong>Frase:</strong> <i>${response.data.content}</i></p>
  `;
});
