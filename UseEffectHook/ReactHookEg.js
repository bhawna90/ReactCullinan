import { useEffect } from "react"

function ReactHookEg(){
    useEffect(()=>{
        console.log("React Hook eg mounted");

        return ()=>{
            console.log("React Hook eg unmounted");
        }
    },[])
    return <div>ReactHookEg</div>
}

export default ReactHookEg
