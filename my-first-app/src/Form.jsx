import { useState } from 'react';
function Form(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
 return(
    <>
    <div>
        <label>name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <label>email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label>password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

    </div>
    </>
 )
}
export default Form;