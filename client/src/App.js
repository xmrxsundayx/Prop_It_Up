import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName = {'Jared'} 
      lastName = {'Sunday'}
      age = {34}
      hairColor = {'Dark Brown'} />
      <PersonCard 
      firstName = {'Alex'} 
      lastName = {'Ponce'}
      age = {21}
      hairColor = {'Dark Brown'} />
      <PersonCard 
      firstName = {'Khrista'} 
      lastName = {'Kwhaja'}
      age = {45}
      hairColor = {'Dark Brown'} />
    </div>
  );
}

export default App;
