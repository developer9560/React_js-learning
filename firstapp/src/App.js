import logo from './logo.svg';
import './App.css';
import {Header , Card, ProductItems} from './Header';
import Footer from './Footer';
import { blog } from './Data/Post.js';
import { useState } from 'react';
function App() {
  let [count , setcount] = useState(1);
  let [pshow , setpshow] = useState(true);

//  let info = {
//   'heading' : "this is title",
//   'email' : "abcd@gmail.com",
//  }
// to print and update by useState

 let clickevent = ()=>{
  alert("button was clicke");
  // setcount(count++);

 }
// here addum variable to use for paramtric function 
 let addnum = (a , b)=>{
  console.log(a+b)
  setcount(count+1) // setcount is function and setcount set rerendt using redeneder;
 }
  return (
    <div>
      <Header/>

      
      {count}
       <button onClick={clickevent}>click me  </button> {/*on click function  */}
       <button onClick={()=>addnum(34,53)}>add num </button> {/*on click function  for parametric funciton */}
       <div className='row'>
      {blog.map((v , i)=>{
        return (
          // <Card para = {blog[i]}/> // by doing this can be access all product data
          <Card para = {v} key = {i}/> // here key is added because to generate unique prodcut card 
        )
      })}
      {/* <Card num = "2"/>
      <Card num ="3" /> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

// it is all neccery package to install for fontawesome
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
