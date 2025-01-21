import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import btnModule from './Button.module.css';

function App() {
  let [status , setstatus] = useState(false);
  return ( 
    <div className="App">
      <button className={btnModule.error} >click me</button>
      <button onClick={() => setstatus(!status)}>
        {status ? "ON" : "OFF"}
        </button>
      {status ? <h1>hello</h1> : <h1>world</h1>}
     <p>Welcome to statehandling</p> 
    </div>
  );
}

export default App;
