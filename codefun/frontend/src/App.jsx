import React, { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Create from './Components/Create';
import Profile from './Components/Profile';
import Element from './Components/Element';
import GetCode from './Components/GetCode';
import Test from './Test';
import Review from './Components/Review'
import './App.css';
import CursorEffect from './Components/CursorEffect';

const App = () => {
  const [login,setLogin] = useState(false); 
  const [element,setElement] = useState("Buttons");
  const [active, setActive] = useState("All");

  

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token)
    {
      setLogin(true);
    }

  },[]);
  return (
    <div>
      <BrowserRouter >
        <Navbar login={login} element={element} setElement={setElement} setActive={setActive}/> 
          <Routes >
            <Route path='/' element={<Hero />} />
            <Route path='/create' element={<Create element={element} />} />
            <Route path='/profile' element={<Profile setActive={setActive} active={active}/>} />
            <Route path='/login' element={<Login login={login} setLogin={setLogin}/>} />
            <Route path='/register' element={<Register login={login} setLogin={setLogin}/>} />
            <Route path='/elements' element={<Element active={active} setActive={setActive}/>} />
            <Route path='/code' element={<GetCode />} />
          </Routes>
          <CursorEffect />
      </BrowserRouter>
    </div>
    // <>
    //   <Test />
    // </>
  )
}

export default App