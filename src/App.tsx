import './App.css';
import Button from './components/Button';

function App() {


  return (
    <div className="App">
      <Button handleClick={()=> {
        console.log("Button clicked!")
      }}></Button>
    </div>
  );
}

export default App;
