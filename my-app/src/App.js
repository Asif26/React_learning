import './App.css'
import List from './components/List/List'
import AddItem from './components/Form/AddItems';
import { useState } from 'react';

function App(){
  
 const [items,setItems] = useState(["Item 1", "Item 2"])
 const onAddHandler = (data) =>{
  setItems([...items,data])
 }
  return(
    <div className= "App">
      <AddItem onAdd={onAddHandler}/>
      <List arr={items}/>
    </div>
  ); 
}
export default App;
