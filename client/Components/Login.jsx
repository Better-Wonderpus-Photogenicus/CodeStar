import React from "react";

function LogIn() {
  return (
    <div className='login'>
      <form method='post'>
        <div className='login-container'>
          <label>Username: </label>
          <input type='text' name='username' required />
        </div>
        <div className='login-container'>
          <label>Password: </label>
          <input type='password' name='password' required />
        </div>
        <div className='login-container'>
          <input type='submit' />
        </div>
      </form> 

      <div> 
        <p>Don't have an account? Click here to sign-up.</p>
        <a href="/signup">Sign Up</a>
      </div> 
    </div>
  )
}

export default LogIn;