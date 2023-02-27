import "./styles.css";
import { useState } from "react";
import List from "./List";

export default function App() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(["John", "Rose"]);
  function addUser() {
    setUsers([...users, username]);
  }
  console.log("App rendered");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={addUser}>Add user</button>
      <List users={users} />
    </div>
  );
}
