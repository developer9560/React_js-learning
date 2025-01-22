import React from 'react'
import faqQuestion from './DATA/faqQuestion.js';
import { useState } from 'react';

export default function Faqs() {
    let [currentId ,setCurrentId] = useState(faqQuestion[0].id);  
    let itemsDetails  ={
        currentId, 
        setCurrentId
    }
  return (
    <div> 
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className='faqouter'>
        {faqQuestion.map((v, i)=>{
          return (
            <FaqItems itemsDetails = {itemsDetails} key = {i}  items = {v}   />
          );
        })}
        </div>
    </div>
  )
}
function FaqItems(props) {
    return(
        <div className='faqItems' >    
        <h3 onClick={()=>props.itemsDetails.setCurrentId(props.items.id)}>{props.items.question}</h3>
        <p className={props.itemsDetails.currentId=== props.items.id ? "show" : "hide   "}>{props.items.answer}</p>
      </div>
      
    )
 }
