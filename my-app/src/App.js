import logo from './logo.svg';
import './App.css';
import List from './components/List/List';


function App() {
  const bool = true;
  return (
    <div className={`my-class ${bool ? "App": ""}`
                                /*{bool && "App"}*/}
      style={{backgroundColor: bool ? '#000':"#fff"}}>
      <List />
    </div> 
  );
}

export default App;
