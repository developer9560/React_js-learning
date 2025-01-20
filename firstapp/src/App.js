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

          <Card para = {blog[i]}/> 
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
