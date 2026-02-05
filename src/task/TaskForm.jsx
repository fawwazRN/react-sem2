import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    onSubmit(item);
    setItem("");
  }
  return (
    <div>
      <h1>create task</h1>
      <form>
        <input type="text" required value={item} onChange={handleChange} />
        <button onClick={handleClick}>add</button>
      </form>
    </div>
  );
}
