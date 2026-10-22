import { useEffect, useState } from "react";
export default function Fetch(){
    const [users,setuser]=useState([]);
    useEffect(()=>{
       const fetchusers=async () => {
        try {
        const data=await fetch("https://dummyjson.com/users")
        const data1=await data.json()
        setuser(data1.users)
        }
        catch(error)
        {
         console.error(error)
        }
     }
     fetchusers();
    },[]) 
    return(
      <div>
      <h2>User List</h2>
      <ul>
        {
        users.map((user) => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
}
  

