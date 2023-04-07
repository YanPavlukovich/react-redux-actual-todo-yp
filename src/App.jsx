import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  const removeTodo = (toodId) => {
    setTodos(todos.filter((todos) => todos.id !== toodId));
  };

  const toggleTodoComplete = (toodId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== toodId) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <div className="App">
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </label>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <span className="delete" onClick={() => removeTodo(todo.id)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
