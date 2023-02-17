import logo from './logo.svg';
import './App.css';
import React from "react"
import Products from './Products';


class App extends React.Component{
  render(){
    return <div className='App'>
      <Products></Products>
    </div>
  }
}
export default App;
