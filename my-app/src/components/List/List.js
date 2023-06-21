
import Item from "../item/item";
function List() {
    const arr = ["Item 1", "Item 2"]
  return (
    <div className="App">
     <Item title={arr[0]}/> 
     <Item title ={arr[1]}/>
    </div>
  );
}

export default List;