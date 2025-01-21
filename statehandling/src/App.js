import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import btnModule from './Button.module.css';
import Password from './Password.js'

function App() {
  let [status , setstatus] = useState(false);
  return (
    <div className="App">
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
