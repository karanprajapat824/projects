import React,{useState} from 'react'
import styled from 'styled-components';
import './../Css/BigProductCard.css';
import {BiCodeAlt} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import {MdFavoriteBorder} from 'react-icons/md';

const BigProductCard = (props) => {
    const Container = styled.div`${props.css}`;
    return (
        <div className='big-card-body'>  
          <div className='big-card-content'>
            <Container dangerouslySetInnerHTML={{ __html: props.html}} />
          </div>
          <a href={`/code?_id=${props._id}`}>
          <button className='get-code-button-in-big-card' ><BiCodeAlt style={{fontSize : "20px"}}/>Get code</button> 
          </a>
          <div className='product-card-footer-in-big-card'>
            <div className='product-card-profile-in-big-card'>
                <CgProfile />
                {props.username}
            </div>
            <div className='product-card-likes-in-big-card'>
            <MdFavoriteBorder />
            Favorite
            </div>
          </div>
        </div>
    )
}

export default BigProductCard
