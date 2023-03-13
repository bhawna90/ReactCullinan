const CompA = (props) =>{
    if(props.text === "Hi"){
        throw new Error("Hi is not accepted")
    }
    return <div>
        {props.text}
    </div>
}

export default CompA
