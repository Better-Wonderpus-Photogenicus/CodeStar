import React from "react";

function LogIn() {

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
    <div className='login'>
      <form action='http://localhost:3000/login' method='post'>
        <div className='login-container'>
          <label id='text'>Username: </label>
          <input type='text' name='username' id='username'required />
        </div>
        <div className='login-container'>
          <label id='text2'>Password: </label>
          <input type='password' name='password' id='password' required />
        </div>
        <div className='login-container' id='submit'>
          <input type='submit' id='btn'/>
        </div>
      </form> 

      <div id='bottombox'> 
        <button type='button' id='google' onClick={oauthSignIn}>Log In With Google</button>
        <div id='newsignup'> 
          <p>Don't have an account? Click here to sign-up.</p>
          <a href="/signup">Sign Up</a>
        </div>
      </div> 
    </div>
  )
}

export default LogIn;