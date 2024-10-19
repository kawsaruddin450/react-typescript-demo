import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {


  return (
    <div className="App">
      <Button handleClick={()=> {
        console.log("Button clicked!")
      }}></Button>
      <Input value='Kawsar' handleChange={(event) => console.log(event)}></Input>
    </div>
  );
}

export default App;
