import logo from './logo.svg';
import './App.css';
import {Header , Card} from './Header';
import Footer from './Footer';
function App() {
 
  return (
    <div>
      <Header/>
      <div className='row'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
