function List({items}){
    return(
        <>
    <ul>
      {items.map((fruit,index)=>{
       return <li key={index}>{fruit}</li>
      }
      )}
    </ul>
        </>
    )
}
export default List;