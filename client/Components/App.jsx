import React from 'react';
import Header from './Header.jsx'
import CompatabilityContainer from './Containers.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header /> 
      <CompatabilityContainer />
    </div>
  )
}

export default App;



