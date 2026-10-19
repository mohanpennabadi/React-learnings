import { useState,useEffect } from "react";
function Permanent(){
    const [c,setc]=useState(()=>{
    const pcount= localStorage.getItem("count")
     return pcount?Number(pcount):0;})
    useEffect(()=>{
    localStorage.setItem("count",c);
    console.log("count is getting stored in local storage")
 },[c])
function handle(){
    setc(c+1)
  }
   function handle1(){
    setc(c-1)
  }
   function handle2(){
    setc(0)
  }
    return(   
       <>
       <p>{c}hello</p>
       <button onClick={handle}>INCREMENT</button>
        <button onClick={handle1}>DECREMENET</button>
        <button onClick={handle2}>RESET</button>
        </> 
    )
}
export default Permanent;