import logo from './logo.svg';
import './App.css';
import List from './components/List/List';
import AddItems from './components/Form/AddItems';

function App() {
  
  const arr = ['item 1', 'item2']
  const onAddHandler = (data) =>{
console.log(data)
  }
  return (
    <div className='App'> 
    
      <AddItems onAdd={onAddHandler}/>
      <List arr={arr}/>


    </div> 
  );
}

export default App;
