import React,{useState} from 'react';
import './../Css/GetCode.css';
import styled from 'styled-components';
import { MdKeyboardBackspace } from "react-icons/md";

const Review = ()=>{
	
	const [html,setHtml] = useState('');
	const [css,setCss] = useState('');
	const Container = styled.div`${css}`;
	const [textField,setTextField] = useState('html');
	const [message,setMessage] = useState('');

	return(
		 <>
    <div className='getCode-background'>
      <div className="overview-of-getCode">
      <div className='getCode-back-button' onClick={()=>navigateTo('/elements')}>
        <MdKeyboardBackspace style={
          {
            fontSize : "28px",
          }
        }/> 
        Go Back
      </div>
      <div className='getCode-container'>
        <div className='getCode-output-container'>
          <Container dangerouslySetInnerHTML={{__html : html}} />
        </div>
        <div className='getCode-input-container'>
        <div className='getCode-navbar'>
          {
            textField === 'html' ? 
            <button className='getCode-active-button' ><img src='./src/Components/html.png' style={{height : "4vh"}}/>HTML</button> : 
            <button className='getCode-inActive-button' onClick={()=> setTextField('html')}><img src='./src/Components/html.png' style={{height : "20px"}}/>HTML</button>
          }
          {
            textField === 'css' ? 
            <button className='getCode-active-button'><img src='./src/Components/css.png' style={{height : "4vh"}}/>CSS</button> : 
            <button className='getCode-inActive-button' onClick={()=> setTextField('css')}><img src='./src/Components/css.png' style={{height : "22px"}}/>CSS</button>
          }
        </div>
        {
          textField === 'html' ?
          <div className='getCode-input-textarea-container'>
            <textarea value={html} onChange={(e)=>setHtml(e.target.value)} placeholder='html'/>
          </div> : 
          <div className='getCode-input-textarea-container'>
            <textarea value={css} onChange={(e)=>setCss(e.target.value)} placeholder='css'/>
          </div>
          
        }
        </div>
      </div> 
      <div className="getCode-message">        
        <button>Right</button>
        <button>Wrong</button>
      </div> 
      
      </div>
    </div>
    </>
		);
}

export default Review