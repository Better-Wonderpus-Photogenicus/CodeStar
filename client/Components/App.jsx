import React from 'react';
import CompatibilityContainer from './Containers.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LogIn from './Login.jsx';
import SignUp from './Signup.jsx';
import Profile from './Profile.jsx';
import icon from '../Assets/Images/icons8-starburst-shape-80.png'

function App() {

  return (
    <BrowserRouter>
      <header id='header'>
        <img src={icon} id='icon' />
        <h1 id="logo"> {"<"}code{">"}star </h1>
      </header>
        <nav id='nav'>
          {/* <Link className='link' to='/'>Home</Link> */}
          <Link className='link' to='/profile'>Profile</Link>
          <Link className='link' to='/compatibility'>Compatibility</Link>
        </nav>
      <main>
        <Routes>
          <Route path='/' element={<LogIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/compatibility' element={<CompatibilityContainer />}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;



