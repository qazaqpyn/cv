import './App.css';
import Condition from './components/Condition'


function App() {
  return (
    <div>
      <Condition process="edit" />
      <Condition process="editEdu" list={[]} edit={false} />
    </div>
  );
}

export default App;
