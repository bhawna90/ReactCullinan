import logo from './logo.svg';
import './App.css';
import React from 'react';
import Color from "./Color"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      selectedColor: ""
    }
  }
  updateSelectedColor=(color)=>{
    this.setState({selectedColor: color})
  }
  render(){
    let colors=["red","blue","green","yellow"]
    return <div className='outer-div' style={{backgroundColor: this.state.selectedColor, height: "100vh"}}>
     
      <div className='container'>
      {
        colors.map(color=>{
          return <Color color={color} name="Bhawna" updateSelectedColor={this.updateSelectedColor}></Color>
        })
      }
      </div>
    </div>
    
  }
}

export default App

