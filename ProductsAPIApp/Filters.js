import logo from './logo.svg';
import './App.css';
import React from "react"


class Filters extends React.Component{
    constructor(){
        super()
        this.state={
            search: ""
        }
    }
    handleClick=()=>{
        this.props.filterProducts(this.state.search)
    }
  render(){
    return <div className='Filters'>
        <input type="text" placeholder='search' value={this.state.search} onChange={(e)=>{
            this.setState({search: e.target.value})
        }}></input>
        <button onClick={this.handleClick}>Apply</button>
    </div>
  }
}
export default Filters;
