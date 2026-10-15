import {useState} from 'react';
function Implementation(props){
    const {name,role,department}=props;
    const [count,setCount]=useState(0);
    function Increment(){
        setCount(count + 1);
    }
    return(
        <>

        <h1>this is implementation component</h1>
        <p>name:{name}</p>
        <p>role:{role}</p>
        <p>department:{department}</p>
        <div>
            <button onClick={Increment}>
                Click me,yo already clicked {count} times
            </button>
        </div>
        </>
    );

}
export default Implementation;