import logo from './logo.svg';
import './App.css';
import List from './components/List/List';
import AddItems from './components/Form/AddItems';

function App() {
  const bool = true;
  return (
    <div className={`my-class ${bool ? "App": ""}`
                                /*{bool && "App"}*/}>
      <AddItems />
      <List />


    </div> 
  );
}

export default App;
