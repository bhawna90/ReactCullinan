import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {useState} from "react"


function App(){
  const arr = useState(1)
  console.log(arr[0], arr[1]); // -> [1, fn]
  const updateState = arr[1]
  console.log("render");
  const handleClick = () => {
    console.log("handleClick called");
    updateState(2) // -> [2, fn]
  }
  return <div>
     <button onClick={handleClick}>Increment</button>
    Functional Component</div>
}

export default App;
