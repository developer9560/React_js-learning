
import { Children } from 'react';
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


/**
 * This component renders a card with a given number and children.
 * @param {{num: number, children: ReactNode}} props
 * @returns {ReactElement}
 */
function Card(props ){
    return(
        <div className='cardItems'> 
        <h1 style = {{textAlign:"center"}}>card {props.para.id}</h1>
        <h3>{props.para.title}</h3>
        <p>{props.para.body}</p>
        </div>
    );
}

function ProductItems(){
    return(
        <div>
            <h1>Product Items</h1>
            <p></p>
        </div>
    );

}

export { Header,Card , ProductItems} ;