import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../common/Header';
import { blog } from '../Data/Post ';
export default function BlogDetails() {
    let uselocation = useLocation();
    let currentId = uselocation.pathname.split("/")[2];
    let currentData = blog.find((v , i)=> i == currentId-1);
    // we can use filter method also
  return (
    <div>
        <Header/>
      <h1>{currentData.title}</h1>
    </div>
  )
}
