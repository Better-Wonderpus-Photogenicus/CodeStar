import React from "react";
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import SignUp from "./SignUp.jsx";
import LogIn from "./LogIn.jsx";

function Header() {
  return (
    <BrowserRouter> 
      <div id='header'> 
        <h1 id="logo"> {"<"}code{">"}star </h1>
        <h2 id="links">
          {/* <a href="/login"> Log In </a> 
          <a href="/signup"> Sign Up </a> */}
        </h2>
        <ul>
          <li style={{margin: '2px'}}><Link to="/login">Log In </Link></li>
          <li style={{margin: '2px'}}><Link to="/signup">Sign Up </Link></li>
        </ul>
        <Routes>
          <Route path='./login' element={<LogIn />}/>
          <Route path='./signup' element={<SignUp />}/>
        </Routes>
      </div>
    </BrowserRouter> 
  )
}

export default Header;