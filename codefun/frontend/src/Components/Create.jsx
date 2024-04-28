import './../Css/Create.css';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import './../Css/GetCode.css';
import { MdKeyboardBackspace } from "react-icons/md";

const Create = (props) => {
  const navigateTo = useNavigate();
  const [message,setMessage] = useState("");
  const token = localStorage.getItem("token");
  const category = props.element;
  const username = localStorage.getItem('username');
  const [textField,setTextField] = useState('css');

  const handleReviewRequest = async ()=>{
    
     const delay = async (time)=>{
      await new Promise((resolve)=>setTimeout(resolve,time))
    }
    

    const response = await fetch('http://localhost:4040/review',{
      method : 'POST',
      body : JSON.stringify({html,css,category,username}),
      headers : {
        'Content-Type' : "application/json",
        "authorization" : `Bearer ${token}`
      }
    });
    const data = await response.json();
    if(data)
    {
      setMessage("It's all done,you are redirect to main page in 5sec....");
      await delay(10000);
      navigateTo('/');
    }
    else{
      console.log("not done");
    }
  }
  const [html,setHtml] = useState("");
  const [css,setCss] = useState("");
  const Container = styled.div`${css}`;
  return (
    <>
    <div className='create-background'>
      <div className="overview-of-create">
      <div className='create-back-button' onClick={()=>navigateTo('/elements')}>
        <MdKeyboardBackspace style={
          {
            fontSize : "28px",
          }
        }/> 
        Go Back
      </div>
      <div className='create-container'>
        <div className='create-output-container'>
          <Container dangerouslySetInnerHTML={{__html : html}} />
        </div>
        <div className='create-input-container'>
        <div className='create-navbar'>
          {
            textField === 'html' ? 
            <button className='create-active-button' ><img src='./src/Components/html.png' style={{height : "4vh"}}/>HTML</button> : 
            <button className='create-inActive-button' onClick={()=> setTextField('html')}><img src='./src/Components/html.png' style={{height : "20px"}}/>HTML</button>
          }
          {
            textField === 'css' ? 
            <button className='create-active-button'><img src='./src/Components/css.png' style={{height : "4vh"}}/>CSS</button> : 
            <button className='create-inActive-button' onClick={()=> setTextField('css')}><img src='./src/Components/css.png' style={{height : "22px"}}/>CSS</button>
          }
        </div>
        {
          textField === 'html' ?
          <div className='create-input-textarea-container'>
            <textarea value={html} onChange={(e)=>setHtml(e.target.value)} placeholder='html'/>
          </div> : 
          <div className='create-input-textarea-container'>
            <textarea value={css} onChange={(e)=>setCss(e.target.value)} placeholder='css'/>
          </div>
          
        }
        </div>
      </div>  
      <div className="create-review-button">
        {
          message === '' ? <button>Review</button> : <div>{message}</div>
        }
        
      </div>
      </div>
    </div>
    </>
  )
}

export default Create
