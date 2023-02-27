import React from "react";
function Todos(props) {
  console.log("Todos rendered");

  return (
    <>
      <h1>Todos</h1>
      <button onClick={props.addTodo}>Add todo</button>
      <ul>
        {props.todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default React.memo(Todos);
