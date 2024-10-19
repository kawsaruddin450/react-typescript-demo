import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const personName = {
    first : "Bruce",
    last: "Wane",
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wane"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Princess",
      last: "Diana",
    }
  ]

  return (
    <div className="App">
      <Greet name="Vishwas" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='error' />
      <Oscar>
        <Heading>Oscar goes to Leonardo Decaprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
