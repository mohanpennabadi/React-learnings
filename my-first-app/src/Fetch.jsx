import { useEffect, useState } from "react";
export default function Fetch(){
    const [user,setuser]=useState({});
    useEffect(()=>{
       const fetchusers=async () => {
        try {
        const data=await fetch("https://dummyjson.com/users")
        const data1=await data.json()
        setuser(data1)
        }
        catch(error)
        {
         console.error(error)
        }
     }
     fetchusers();
    }) 
    return(
      <p>{user}</p>
    )
}

