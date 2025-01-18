import logo from './logo.svg';
import './App.css';
import {Header , Card} from './Header';
import Footer from './Footer';
function App() {
 let info = {
  'heading' : "this is title",
  'email' : "abcd@gmail.com",
 }
  return (
    <div>
      <Header/>
       <div className='row'>
      <Card  num = "1"/>
      <Card num = "2"/>
      <Card num ="3" />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
