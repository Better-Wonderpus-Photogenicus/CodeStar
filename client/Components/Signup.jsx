import React from "react";

function SignUp() {
  return (
    <div className='signup'>
      <form method='post'>
        <div className='signup-container'>
          <label>Username: </label>
          <input type='text' name='username' required />
        </div>
        <div className='signup-container'>
          <label>Password: </label>
          <input type='password' name='password' required />
        </div>
        <div className='signup-container'>
          <label for="birthday">Birth date:</label>
          <input type="date" id="start" name="birthday"
              min="1905-01-01" max="2050-12-31"/>
        </div>
        <div className='signup-container'>
          <input type='submit' />
        </div>
      </form>  
    </div>
  )
}

export default SignUp;