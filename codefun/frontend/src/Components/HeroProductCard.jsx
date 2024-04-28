import React, { useState } from 'react';
import styled from 'styled-components';
import './../Css/HeroProductCard.css';
import { BiCodeAlt } from 'react-icons/bi';
const HeroProductCard = (props) => {  
    const Container = styled.div`${props.css}`;
  return (
    <div className='hero-product-card-body'>
      <div className='product-card-content'>
        <Container dangerouslySetInnerHTML={{ __html: props.html }} />
      </div>
      <a href={`/code?_id=${props._id}`}>
      <button className='get-code-button' >
        <BiCodeAlt style={{ fontSize: "20px" }} /> Get code
      </button>
      </a>
    </div>
  );
};

export default HeroProductCard;
