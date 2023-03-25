import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignUp from "./Signup.jsx";
import LogIn from "./Login.jsx";

function Header() {
  return (
    <BrowserRouter> 
      <div id='header'> 
        <h1 id="logo"> {"<"}code{">"}star </h1>
        <h2 id="links">
          <a href="/login"> Log In </a> 
          <a href="/signup"> Sign Up </a>
        </h2>
        <Routes>
          <Route path='./login' element={<LogIn />}/>
          <Route path='./signup' element={<SignUp />}/>
        </Routes>
      </div>
    </BrowserRouter> 
  )
}

export default Header;