import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import btnModule from './Button.module.css';
import Password from './Password.js'
import ResponsiveMenu from './ResponsiveMenu.js';
import faqQuestion from './DATA/faqQuestion.js';

import Faqs from './Faqs.js';
function App() {
  let [menustatus , setmenustatus] = useState(false);
  let [status , setstatus] = useState(false);

  let[showAsn, setShowAsn] = useState(faqQuestion[0].id);
  return (
    <div className="App">

      <Faqs/>

      {/* <div> // this is faq layout 
        <h1>Frequently Asked Questions (FAQs)</h1>
        <div className='faqouter'>
          {faqQuestion.map((v , i)=>{
            return (
          <div className='faqItems' key= {i}>    
            <h3 onClick={()=>setShowAsn(v.id)}>{v.question}</h3>
            <p className ={showAsn === v.id ? "show" : "hide"}>{v.answer}</p>
          </div>
            );
          })}
        </div>
      </div> */}



     { /* tthis is previous layout of hide and show password and nevigation bar/}
      {/* <button className={btnModule.micon} onClick={()=>setmenustatus(!menustatus)} >&#9776;</button>
      <ResponsiveMenu status={menustatus}/>
      <Password/>
      <button className={status ? btnModule.error : btnModule.success}>click me</button>
       <button className={btnModule.warning} >demo</button>
      <button onClick={() => setstatus(!status)}>
        {status ? "ON" : "OFF"}
        </button>
      {status ? <h1>hello</h1> : <h1>world</h1>}
     <p>Welcome to statehandling</p>  */}
    </div>
  );
}

export default App;
