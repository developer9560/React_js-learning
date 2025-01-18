import logo from './logo.svg';
import './App.css';

function App() {
  let arr = [12,43,4343,34,342,223,]; 
  let status = 0;
  return (
    <div className="App">
      <h1>hello suraj kumar</h1>
      {arr.map((a)=>{
        return(<div> {a}</div>);// using map print all array's value
      
      })};
     { (status==0)? <h1>this is true</h1>: <h2>this is false</h2>}
    </div>
  );
}

export default App;
