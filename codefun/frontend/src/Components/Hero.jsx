import React, { useEffect, useState } from 'react';
import {ImSearch} from 'react-icons/im';
import { BsStars } from 'react-icons/bs';
import './../Css/Hero.css';
import { GoDotFill } from "react-icons/go";
import styled from 'styled-components';
import HeroProductCard from './HeroProductCard'


const Hero = () => {
  const text = ['Buttons','Forms','Cards','Loaders','Radio Buttons','Toggle Switches','Check Boxes'];
  const [items,setItems] = useState("");
  const [data,setData] = useState([]);
useEffect(() => {
  const plaintext = async () => {
    for (let index = 0; index < text.length; index++) {
      for (let charIndex = 0; charIndex < text[index].length; charIndex++) {
        setItems((prevText) => prevText + text[index][charIndex]);
        await delay(100);
      }

      for (let charIndex = text[index].length; charIndex >= 0; charIndex--) {
        await delay(100);
        setItems(text[index].substring(0,charIndex));
      }
    }
    plaintext();
  };

  const delay = async (time) => {
    await new Promise((resolve) => setTimeout(resolve, time));
  };
  plaintext();

}, [setItems]);

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch('http://localhost:4040/getRandomElement',{
      method : 'GET',
      headers : {
        "Content-Type" : "application/json"
      }
    }) ;
    const ResponseData = await response.json();
      setData(ResponseData.data);
      await delay(5000);
      fetchData();
    };

    const delay = async (time) => {
    await new Promise((resolve) => setTimeout(resolve, time));
    };

    fetchData();
  },[setData]);


  return (
    <div className='HeroContainer'>
        <div className='UpperCon'>
          <div className='uppercon-left'>
            <h1 className='heading1'>Open-Source </h1>
            <h1 className='subheading'>UI Building Blocks</h1> 
            <h1 className='heading2'>We Provide <span>{items}<span>|</span></span></h1>
            <h2 className='heading3'>Create, Share & Use <span className='beautiful'> <BsStars />Beautiful</span> Custom <br />Elements Made With CSS</h2>
            <div className='main-input'>
            <div className='input-container'>
            <input className='input' placeholder='Search for  UI elements,creators,tags....'/>
            <button className="searchButton"><ImSearch className='search-icon'/>&nbsp;&nbsp;&nbsp;Search</button>  
            </div>
            </div>
          </div>
            <div className='uppercon-right'>
              <div className="box1">
                <div className="box-head">
                  <GoDotFill className="dot1"/>
                  <GoDotFill className="dot2"/>
                  <GoDotFill className="dot3"/>
                </div>
                <div>
                  {
                  data.slice(0,1).map(HeroProductCard)
                  }  
                </div>
              </div>
              1<div className="box2">
                <div className="box-head">
                  <GoDotFill className="dot1"/>
                  <GoDotFill className="dot2"/>
                  <GoDotFill className="dot3"/>
                </div>
                {
                  data.slice(1,2).map(HeroProductCard)
                }  
              </div>
              <div className="box3">
                <div className="box-head">
                  <GoDotFill className="dot1"/>
                  <GoDotFill className="dot2"/>
                  <GoDotFill className="dot3"/>
                </div>
                {
                  data.slice(2,3).map(HeroProductCard)
                }  
              </div>
              
            </div>
        </div>

    </div>
  )
}

export default Hero