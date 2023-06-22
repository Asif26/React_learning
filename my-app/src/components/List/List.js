
import Item from "../item/item";
function List() {
    const color = ["Yello", "red", "gren","blue"]
    const cItems = color.map((color,index) =><Item key={"no-"+index} title={color}/>);
  return (
    <div>
      {cItems}
    </div>
  );
}

export default List;