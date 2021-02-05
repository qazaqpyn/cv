import './App.css';
import Condition from './components/Condition'
import Practice from './components/Practice'
import Education from './components/Education'
import {useState} from 'react'


function App() {
  const [preview, setPreview] = useState(false);
  let text = "Preview";
  preview?text='Edit':text='Preview';
  return (
    <div>
      <button onClick={()=>setPreview(!preview)}>{text}</button>
      {console.log('in app'+preview)}
      <Condition preview={preview} process="edit" />
      <Education preview={preview} list={[]} />
      <Practice preview={preview} list={[]} />
    </div>
  );
}

export default App;
