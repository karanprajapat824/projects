import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom';
import './../Css/Profile.css';
import { MdKeyboardBackspace } from "react-icons/md";

const Profile = (props) => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    const  fetchData = async ()=>{
      const response = await fetch('http://localhost:4040/getElementsByProfile',{
        method : 'POST',
        body : JSON.stringify({active : props.active}),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      const responseData = await response.json();
      if(responseData)
      { 
        setData(responseData);
      }

    }

    
    fetchData();
  },[props.active]);

  const navigateTo = useNavigate();
  let activeMode = {
    textShadow  : "0 0 10px rgba(77,175,200,0.3),0 0 10px rgba(77,175,200,0.3),0 0 10px rgba(77,175,200,0.3)",
    borderRadius : "0.5vw",
    border : "2px solid rgb(77,175,200)"
  }
  let inActiveMode = {
    color : "white",
  }
  let handleButtonRequest = () => {
    props.setActive('Buttons');
  }
  let handleCardRequest = () => {
    props.setActive('Cards');
    
  }
  let handleCheckBoxRequest = () => {
    props.setActive('Check Boxes');
  }
  let handleFormRequest = () => {
    props.setActive('Forms');
  }
  let handleOtherRequest = () => {
    props.setActive('Others');
  }
  let handleAllRequest = () => {
    props.setActive('All');
  }
  let handleInputsRequest = () => {
    props.setActive('Inputs');
  }
  let handleLoadersRequest = () => {
    props.setActive('Loaders');
  }
  let handleRadioButtonRequest = () => {
    props.setActive('Radio Buttons');
  }
  let handletoggleSwitchesRequest = () => {
    props.setActive('Toggle Switches');
  }

  return(
      <div className="profile-background">
        <div className='profile-banner'>
        <div className='profile-back-button' onClick={()=>navigateTo('/elements')}>
        <MdKeyboardBackspace style={
          {
            fontSize : "28px",
          }
        }/> 
        Go Back
      </div>
          <div className='profile-banner-upper-part'>
            <div className='profile-image'>K</div>
            <div className="profile-username">Karan</div>  
          </div>
          <div className="profile-lower-part">
            <div>Total Elements</div>
            <div>89</div>
          </div>  
        </div>

        <div className="profile-main-body">
          <div className="profile-navbar">
                <label  style={props.active === "All" ? activeMode : inActiveMode} onClick={handleAllRequest}>All</label>
                <label  style={props.active === "Buttons" ? activeMode : inActiveMode} onClick={handleButtonRequest}>Button</label>
                <label  style={props.active === "Forms" ? activeMode : inActiveMode} onClick={handleFormRequest}>Form</label>
                <label  style={props.active === "Cards" ? activeMode : inActiveMode} onClick={handleCardRequest}>Card</label>
                <label  style={props.active === "Check Boxes" ? activeMode : inActiveMode} onClick={handleCheckBoxRequest}>Check box</label>
                <label  style={props.active === "Inputs" ? activeMode : inActiveMode} onClick={handleInputsRequest}>Inputs</label>
                <label  style={props.active === "Loaders" ? activeMode : inActiveMode} onClick={handleLoadersRequest}>Loaders</label>
                <label  style={props.active === "Radio Buttons" ? activeMode : inActiveMode} onClick={handleRadioButtonRequest}>Radio Buttons</label>
                <label  style={props.active === "Toggle Switches" ? activeMode : inActiveMode} onClick={handletoggleSwitchesRequest}>toggle Switches</label>
          </div>

        </div>  
      </div>
    );
}

export default Profile
