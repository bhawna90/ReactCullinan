import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentSlide: 0
    }
  }
  render(){
    let slides=[{title: "Title 1", description: "description 1"},{title: "Title 2", description: "description 2"},
    {title: "Title 3", description: "description 3"},{title: "Title 4", description: "description 4"}]
    return <div>
      <h1>{slides[this.state.currentSlide].title}</h1>
      <p>{slides[this.state.currentSlide].description}</p>
      <button onClick={()=>{
        // if(this.state.currentSlide>0)
          this.setState({currentSlide: this.state.currentSlide-1})
      }}
      disabled={this.state.currentSlide===0}
      >Previous</button>
      <button onClick={()=>{
        // if(this.state.currentSlide < slides.length-1)
          this.setState({currentSlide: this.state.currentSlide+1})
      }}
      disabled={this.state.currentSlide === slides.length-1}
      >Next</button>
    </div>
    
  }
}

export default App

