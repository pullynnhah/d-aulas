import { useState } from "react";
export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div className="calculator">
      <h1>Contador</h1>
      <div className="cell">
        <button className="plus" onClick={() => setCount(count + 1)}>
          +
        </button>
        <div className="value">{count}</div>
        <button className="minus" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
}
