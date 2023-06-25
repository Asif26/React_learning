import Item from "../item/item";
function List({arr}){
  
  const items = arr.map((item,key) => {
    return <Item Key={key} title={item} />
  });
  return(
    <div>
    {items} 
    </div>
  )
}

export default List;