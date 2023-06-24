import './App.css'
import List from './components/List/List'
import AddItem from './components/Form/AddItems';

function App(){
 
  return(
    <div className= "App">
      <AddItem />
      <List />
    </div>
  );
}
export default App;
