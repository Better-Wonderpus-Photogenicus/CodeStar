import React from "react";

function SignUp() {

  return (
    <div className='signup'>
      <form action='http://localhost:3000/signup' method="post">
        <div className='signup-container'>
          <label id='text'>Username: </label>
          <input type='text' name='username' id='username' required />
        </div>
        <div className='signup-container'>
          <label id='text2'>Password: </label>
          <input type='password' name='password' id='password' required />
        </div>
        <div className='signup-container'>
          <label for="birthday" id='text3'>Birth date:</label>
          <input type="date" id="birthday" name="birthday"
              min="1905-01-01" max="2023-12-31"/>
        </div>
        <div className='signup-container' id='submit'>
          <input type='submit' id='btn'/>
        </div>
      </form>  
    </div>
  )
}

export default SignUp;