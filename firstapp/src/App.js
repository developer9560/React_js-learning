import logo from './logo.svg';
import './App.css';
import {Header , Card, ProductItems} from './Header';
import Footer from './Footer';
import { blog } from './Data/Post.js';
function App() {
 let info = {
  'heading' : "this is title",
  'email' : "abcd@gmail.com",
 }
  return (
    <div>
      <Header/>
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
