import React, { useState } from 'react';
import styled from 'styled-components';
import './../Css/ProductCard.css';
import { BiCodeAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { MdFavoriteBorder } from 'react-icons/md';
const ProductCard = (props) => {  
    const Container = styled.div`${props.css}`;
  return (
    <div className='product-card-body'>
      <div className='product-card-content'>
        <Container dangerouslySetInnerHTML={{ __html: props.html }} />
      </div>
      <a href={`/code?_id=${props._id}`}>
      <button className='get-code-button' >
        <BiCodeAlt style={{ fontSize: "20px" }} /> Get code
      </button>
      </a>
      <div className='product-card-footer'>
        <div className='product-card-profile'>
          <CgProfile />
          {props.username}
        </div>
        <div className='product-card-likes'>
          <MdFavoriteBorder />
          Favorite
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
