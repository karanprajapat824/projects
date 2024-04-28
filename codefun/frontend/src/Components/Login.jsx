import React, { useState } from 'react'
import './../Css/Login.css';
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState('');
  const navigateTo = useNavigate();
  const handleSigninrequest = async ()=>{
      const response = await fetch('http://localhost:4040/login',{
        method : 'POST',
        body : JSON.stringify({username,password}),
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
	<p className="title">Login</p>
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
			<div className="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div>
		</div>
		<button className="sign" onClick={handleSigninrequest}>Sign in</button>
	</div>
	<div className="social-message">
		<div className="line"></div>
	</div>
  <div className='message'>{message}</div>
	<div className="social-icons">
	</div>
	<p className='signup'>Don't have an account?
  <span onClick={()=>navigateTo('/register')} className=''>
    Sign up
    </span>
	</p>
</div>
    </div>
  )
}

export default Login
