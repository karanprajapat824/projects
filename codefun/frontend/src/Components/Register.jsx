import React, { useState } from 'react'
import './../Css/Login.css';
import { useNavigate } from 'react-router-dom';
const Register = (props) => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [gmail,setGmail] = useState('');
  const [message,setMessage] = useState('');
  const navigateTo = useNavigate();
  const handleSignuprequest = async ()=>{
      const response = await fetch('http://localhost:4040/register',{
        method : 'POST',
        body : JSON.stringify({username,password,gmail}),
        headers : {
          'Content-Type' : "application/json"
        }
      });
      let data = await response.json();
      if(!data.token)
      {
        setMessage(data.message);
      }
      else 
      {
        localStorage.setItem("token",data.token);
        localStorage.setItem("username",username);
        props.setLogin(true);
        setMessage("");
        navigateTo('/');
      }
  }
  return (
    <div className='background'>
      <div className="form-container">
	<p className="title">Signup</p>
	<div className="form">
		<div className="input-group">
			<label htmlFor="username">Username</label>
			<input type="text" name="username"  value={username} 
      onChange={(e)=>setUsername(e.target.value)}
      id="username" placeholder="" />
		</div>
		<div className="input-group">
			<label htmlFor="password">Password</label>
			<input type="password" name="password" value={password}
      onChange={(e)=>setPassword(e.target.value)}
      id="password" placeholder="" />

<div className="input-group">
			<label htmlFor="gmail">Gmail</label>
			<input type="text" name="gmail" value={gmail}
      onChange={(e)=>setGmail(e.target.value)}
      id="gmail" placeholder="" />
      </div>
		</div>
		<button className="sign" onClick={handleSignuprequest}>Register</button>
	</div>
	<div className="social-message">
		<div className="line"></div>
	</div>
  <div className='message'>{message}</div>
	<div className="social-icons">
	</div>
	<p className='signup'>have an account?
  <span onClick={()=>navigateTo('/Login')} className=''>
    Login
    </span>
	</p>
</div>
    </div>
  )
}

export default Register
