import React from 'react'

const Input = (props) => {
    let handleOnHtmlChange = (e) => {
        props.setHtml(e.target.value);
    };
    
  return (
    <div>
        <textarea value={props.html} onChange={handleOnHtmlChange}/> 
        <br />
        
    </div>
  )
}

export default Input