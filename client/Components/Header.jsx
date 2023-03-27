import React from "react";
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import SignUp from "./Signup.jsx";
import LogIn from "./Login.jsx";

function Header() {

  function oauthSignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  
    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    const form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);
  
    // Parameters to pass to OAuth 2.0 endpoint.
    const params = {'client_id': '266313643169-f6gv82sh4k76rpjaj00ndnf0m85ifqbn.apps.googleusercontent.com',
                  'redirect_uri': 'http://localhost:3000/login/google',
                  'response_type': 'code',
                  'scope': 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/user.birthday.read',
                  'include_granted_scopes': 'true',
                  // 'state': 'pass-through value'
                };
  
    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
  
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }

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
        <button type='button' onClick={oauthSignIn}>Log In With Google</button>
        <Routes>
          <Route path='./login' element={<LogIn />}/>
          <Route path='./signup' element={<SignUp />}/>
        </Routes>
      </div>
    </BrowserRouter> 
  )
}

export default Header;