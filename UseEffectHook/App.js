import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import Color from "./Color";
import CompA from "./CompA";
import { useState } from "react";
import ReactHookEg from "./ReactHookEg";

function App() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const handleClick = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter2(counter2 + 2);
  };
  const fetchData=async ()=>{
    try{
        setLoading(true)
        const data = await fetch("https://fakestoreapi.com/products")
        const products = await data.json()
        console.log(products);
        setProducts(products)
        setLoading(false)
    }
    catch(err){
        console.log("Error while fetching products",err);
    }
}
  useEffect(() => {
    if(counter > 5)
    {console.log("useEffect");
    fetchData()}
  },[counter]);
  console.log("render");

  useEffect(()=>{
    console.log("counter2 updated");
  },[counter2])


  if(loading)
    return <h1>Loading...</h1>
  return (<>
    <ul>
      {products.map((product,index)=>{
        return <li key={index}>{product.title}</li>
      })}
    </ul>
    <div>
      {counter}
      <br></br>
      <button onClick={handleClick}>Increment</button>
    </div>
    <div>
      {counter2}
      <br></br>
      <button onClick={handleClick2}>Increment</button>
    </div>
    {counter < 5 ? <ReactHookEg></ReactHookEg>:<div>counter value is greater than 4</div>}

  </>)
}

export default App;
