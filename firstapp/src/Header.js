
import './App.css'

function Header(props){
    return(
        <div className="headerbox">
         <nav className="navbox">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>about</li>
                <li>Contact us</li>
                <li>SignUp</li>
            </ul>
         </nav>
        </div>
    );
}




// card items 


function Card(props){
    
    return(
        <div className='cardItems'> 
        <h1 style = {{textAlign:"center"}}>card {props.num}</h1>
        </div>
    );
}

export { Header,Card};