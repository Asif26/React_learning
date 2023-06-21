
import Item from "../item/item";
function List() {
    const arr = ["Item 1", "Item 2"]
  return (
    <div>
     <Item title={arr[0]}/> 
     <Item title ={arr[1]} about="Hello to the world"/>
    </div>
  );
}

export default List;