import { useState } from "react";

export default function App() {
  const [numeros, setNumeros] = useState([]);

  function verNumerosSorteados() {
    const numbers = [1, 2, 3, 4, 5, 57];
    setNumeros(numbers);
    alert(numbers);
  }

  return (
    <div>
      <button onClick={verNumerosSorteados}>Ver números</button>
      {numeros.map(n => (
        <li key={n}>{n}</li>
      ))}
    </div>
  );
}
