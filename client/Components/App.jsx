import React from 'react';
import CompatibilityContainer from './Containers.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LogIn from './Login.jsx';
import SignUp from './Signup.jsx';

function App() {

  return (
    <BrowserRouter>
      <header id='header'>
        <h1 id="logo"> {"<"}code{">"}star </h1>
        <nav id='nav'>
          <Link className='link' to='/'>Home</Link>
          {/* <Link className='link' to='/profile'>Profile</Link> */}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<LogIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/compatibility' element={<CompatibilityContainer />}></Route>
          {/* <Route path='/profile' element={<Profile/>}></Route> */}
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;



