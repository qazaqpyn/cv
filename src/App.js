import './App.css';
import Condition from './components/Condition'
import Practice from './components/Practice'
import Education from './components/Education'
import {useState} from 'react'
import './App.css'


function App() {
  const [preview, setPreview] = useState(false);
  let text;
  preview?text='Preview':text='Edit-Mode';
  return (
    <div>
      <div onClick={()=>setPreview(!preview)} id="btn">
        <span className="noselect">
          {text}
        </span>
          <div id="circle">
          </div>
      </div>
      {/* <button onClick={()=>setPreview(!preview)}>{text}</button> */}
      {console.log('in app'+preview)}
      <Condition preview={preview} process="edit" />
      <Education preview={preview} list={[]} />
      <Practice preview={preview} list={[]} />
    </div>
  );
}

export default App;
