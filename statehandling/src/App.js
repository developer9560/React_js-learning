import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import btnModule from './Button.module.css';
import Password from './Password.js'
import ResponsiveMenu from './ResponsiveMenu.js';

function App() {
  let [menustatus , setmenustatus] = useState(false);
  let [status , setstatus] = useState(false);
  return (
    <div className="App">
      <button className={btnModule.micon} onClick={()=>setmenustatus(!menustatus)} >&#9776;</button>
      <ResponsiveMenu status={menustatus}/>
      <Password/>
      <button className={status ? btnModule.error : btnModule.success}>click me</button>
       <button className={btnModule.warning} >demo</button>
      <button onClick={() => setstatus(!status)}>
        {status ? "ON" : "OFF"}
        </button>
      {status ? <h1>hello</h1> : <h1>world</h1>}
     <p>Welcome to statehandling</p> 
    </div>
  );
}

export default App;
