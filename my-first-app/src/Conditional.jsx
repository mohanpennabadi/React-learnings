import { useState } from "react"
function Conditional({username}){
    const [status,setStatus]=useState(true)
    return(
        <>
        <p>{(status)?`hi welcome to website ${username}`:"Offline"}</p>
        <button onClick={()=>{
           setStatus(!status)
        }}>change status</button>  
        </>
    )
}
export default Conditional;