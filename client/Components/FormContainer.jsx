import React from "react";
import SignDropdown from "./SignDropdown.jsx";

function FormContainer(props) {
  return (
    <div id="formContainer">
      <div id='dropdowns'>
        <SignDropdown id='userSign' text={'Your Sign'}/>
        <SignDropdown id='partnerSign' text={'Partner\'s Sign'}/>
      </div>
      <button id='formSubmit' onClick={props.handleSubmit}>Submit</button>
      <p>Don't know your sign? <a href="https://visualfractions.com/astrology/zodiac-sign/" target="_blank" rel="noopener noreferrer">Click here</a></p>
    </div>
  )
}

export default FormContainer;
