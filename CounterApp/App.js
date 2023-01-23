import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      count: 0,
      inputValue: "javascript"
    }
  }
  render(){
    let name = "Bhawna"
    return <>
      <h3 className='text'>Count is {this.state.count}</h3>
  
      <button id="increment" onClick={(e)=>{
        this.setState({count: this.state.count+1, inputValue:""})
      }}>Increment Count</button>
      <button onClick={()=>{
        if(this.state.count>0)
          this.setState({count: this.state.count-1})
      }}>Decrement Count</button>
      <h4>language is {this.state.inputValue}</h4>
    </>
    
  }
}


export default App
