import React from "react";

function SignUp() {

  const [username, setUsername] = React.useState('');

  return (
    <div className='signup'>
      <form action='http://localhost:3000/signup' method="post">
        <div className='signup-container'>
          <label>Username: </label>
          <input type='text' name='username' id='username' required />
        </div>
        <div className='signup-container'>
          <label>Password: </label>
          <input type='password' name='password' id='password' required />
        </div>
        <div className='signup-container'>
          <label for="birthday">Birth date:</label>
          <input type="date" id="birthday" name="birthday"
              min="1905-01-01" max="2023-12-31"/>
        </div>
        <div className='signup-container'>
          <input type='submit' />
        </div>
      </form>  
    </div>
  )
}

export default SignUp;