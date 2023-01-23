import React from "react"

class Color extends React.Component{
    constructor(){
        super()
    }
    render(){
        console.log(this.props)
        return <div className='color' style={{backgroundColor: this.props.color}} onClick={()=>{
            this.props.updateSelectedColor(this.props.color)
          }}></div>
    }
}

export default Color
