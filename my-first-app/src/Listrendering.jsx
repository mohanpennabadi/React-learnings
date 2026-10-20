function List(){
  const products = [
  { id: 'p1', name: 'Laptop', price: '$999' },
  { id: 'p2', name: 'Phone', price: '$699' },
  { id: 'p3', name: 'Headphones', price: '$199' }
];
    return(
    <>
    <ol>
    {
      products.map((product)=>{
       return <li key={product["id"]}>
          {product["name"]}-{product["price"]}</li>

})
    }
     </ol>
        </>
    )
}
export default List;