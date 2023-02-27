import "./styles.css";
import { useCallback, useState, useMemo } from "react";
import Todos from "./Todos";

function calculate(num) {
  console.log("calculate fn called");

  return num * 1000;
}
export default function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  console.log("App rendered");

  // function addTodo() {
  //   setTodos([...todos, "New item"]);
  // }

  const addTodo = useCallback(() => {
    setTodos([...todos, "New item"]);
  }, []);
  // const result = calculate(count);
  const result = useMemo(() => {
    calculate(count);
  }, [count]);
  return (
    <div className="App">
      <Todos todos={todos} addTodo={addTodo} />
      <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
      <div>calculation result {result}</div>
    </div>
  );
}
