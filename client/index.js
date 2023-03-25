import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App.jsx';
import SignUp from './Components/SignUp.jsx';
import styles from './Styles/styles.scss';
// import App from './components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <SignUp />
  </div>
);