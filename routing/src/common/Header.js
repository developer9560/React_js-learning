import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className="headerbox">
    <nav className="navbox">
       <ul>
           <li><Link to="/">Home</Link></li>   
           <li> <Link to = "/Services">Services</Link></li>
           <li><Link to = "/About">about</Link></li>  
           <li><Link to = "/course">course</Link></li>
           <li>SignUp</li>
       </ul>
    </nav>
   </div>
  )
}
