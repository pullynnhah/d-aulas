import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [tasks, setTasks] = useState(["Comprar banana", "Comprar pão"]);

  function addTask() {
    const task = prompt("Digite a tarefa:");
    setTasks([...tasks, task]);
  }

  return (
    <div className="todo-list">
      <button onClick={addTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
