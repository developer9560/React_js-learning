import React from 'react'
import Header from '../common/Header' 
import { blog } from '../Data/Post.js'
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div>
        <Header/>
        <h1>Blog Page</h1>
        <div className='blogContainer'>
        {
            blog.map((v , i)=>{
                return(
                    <Itemsbox key={i} item = {v}/>
                );
            })
        }
        </div>
    </div>
  )
}

function Itemsbox(props) {
  return (
    <div className='box'>
        <h2>{props.item.title}</h2>  
        <p>{props.item.body}</p>
        <Link to={`/blog/${props.item.id}`}>Read More</Link>
    </div>
  )
}