import React from "react";

export default function App() {
  const [tasks, setTasks] = React.useState([
    "Tô cansada de todo list",
    "Vou matar o produtor de conteúdo",
  ]);

  const [task, setTask] = React.useState("");

  function addTask() {
    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div className="todo-list">
      <div className="adicionar-tarefa">
        <input
          value={task}
          onChange={e => setTask(e.target.value)}
          type="text"
          placeholder="Digite a tarefa..."
        />
        <button onClick={addTask}>+</button>
      </div>

      <ul className="tasks">
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
