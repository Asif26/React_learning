
import Item from "../item/item";
function List(){
  const arr = ["Item 1", "Item 2"];
  const items = arr.map((item,index) => {
    return <Item Key={"no-"+index} title={item} />
  });
  return(
    <div>
    {items} 
    </div>
  )
}

export default List;