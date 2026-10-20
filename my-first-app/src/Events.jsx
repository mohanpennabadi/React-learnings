function Handle(){
    const handle=()=>{
        alert("you cicked button")
    }
    return(
        <div>
            <button onClick={handle}>Click Me</button>
        </div>
    )
}
export default Handle;