import { useState } from "react";
function Item(props) {
   const [title, setIT] = useState(props.title)
   const  changeIt = () => setIT("update");
  return (
    <div >
      {title}
      <button onClick={changeIt}>Change</button>
    </div>
  );
}

export default Item; 