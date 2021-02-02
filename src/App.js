import './App.css';
import Condition from './components/Condition'
import Practice from './components/Practice'
import Education from './components/Education'


function App() {
  return (
    <div>
      <Condition process="edit" />
      <Education list={[]} />
      <Practice list={[]} />
    </div>
  );
}

export default App;
