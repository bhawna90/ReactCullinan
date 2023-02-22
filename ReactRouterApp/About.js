import {useNavigate} from "react-router-dom"

function About(){
    const navigate = useNavigate()
    function handleClick(){
        navigate('/products', {state:{greeting:"hello"}})
    }
    return <div>About Comp
        <button onClick={handleClick}>Click Me</button>
    </div>
}

export default About
