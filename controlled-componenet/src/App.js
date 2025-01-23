import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let[uname , setuname] =useState("");
  let [password , setpassword] = useState("");
  let[email, setemail]= useState("");
  let[mobile, setmobile]= useState("");
  let handleSubmit = (event)=>{
    event.preventDefault();
    console.log(uname);
    console.log(email);
    console.log(password);
  }

  // let getuname = (event)=>{ // it can be also use
  //   setuname(event.target.value);
  // }
  return ( 
    <div className="App">
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <span className="title">Sign up</span>
          <span className="subtitle">Create a free account with your email.</span>
          <div className="form-container">
            <input type="text" className="input" placeholder="Full Name" value ={uname} onChange={(event)=>setuname(event.target.value)}></input>
            <input type="email" className="input" placeholder="Email"  value={email} onChange={(event)=>setemail(event.target.value)}/>
            <input type="number" className="input" placeholder="number"  value={mobile} onChange={(event)=>setmobile(event.target.value)}/>
            <input type="password" className="input" placeholder="Password" value={password} onChange = {(event)=>setpassword(event.target.value)}/>
          </div>
          <button>Sign up</button>
        </form>
        <div className="form-section">
          <p>Have an account? <a href="">Log in</a> </p>
        </div>
      </div>
    </div>

  );
}

export default App;
