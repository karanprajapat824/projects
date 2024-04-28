import React, { useState, useEffect } from 'react';
import SideBar from './Sidebar';
import ProductCard from './ProductCard';
import './../Css/Element.css';
import { IoShuffle } from "react-icons/io5";
import { TbPlayerTrackPrevFilled,TbPlayerTrackNextFilled } from "react-icons/tb"
import BigProductCard from './BigProductCard';

const Element = (props) => {
  const [data, setData] = useState([]);
  const [mixed,setMixed] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4040/get${props.active.replace(' ','')}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setData(responseData.data);
      } else {
        console.log('HTTP error! Status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.active,mixed]);

  return (
    <div className='view'>
      <SideBar active={props.active} setActive={props.setActive} />
      <div className='view-cards-main-frame'>
        <div className='view-top-navbar'>
          <div className='view-heading'>{props.active}</div>
          <div className='vertical-line'></div>
          <button onClick={()=>setMixed(!mixed)} className='element-mixed-button'><IoShuffle />mixed</button>
        </div>
        <div className='cards'>
          {
            props.active === "Forms" || props.active === "Cards" ? 
            data?.map(BigProductCard) : data?.map(ProductCard)
          }
          <div className='pagination'>
        <button onClick={() => setMixed(!mixed)} >
          Next<TbPlayerTrackNextFilled />
        </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Element;
