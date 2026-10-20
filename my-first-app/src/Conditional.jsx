import { useState } from "react"
function Conditional({username,connection}){
    const [status,setStatus]=useState(true)
    return(
        <>
        <div>
        <p>{(status)?`hi welcome to website ${username}`:"Offline"}</p>
        <button onClick={()=>{
           setStatus(!status)
        }}>change status
        </button>  </div>
        <div>
           {connection ? <p>loading .......</p> : <p>check you internet connection</p>}
        </div>
        </>
    )
}
export default Conditional;