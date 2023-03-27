import React from "react";
import FormContainer from "./FormContainer.jsx";
import ResultsContainer from "./ResultsContainer.jsx";

function CompatibilityContainer() {
  const [text, setText] = React.useState('')
  const [sign1, setSign1] = React.useState('')
  const [sign2, setSign2] = React.useState('')

  const [loggedIn, setLoggedIn] = React.useState(true);

  React.useEffect(() => {
    const url = '/loggedIn'

    const loggedIn = async () => {
      const response = await fetch(url);
      const json = await response.json();
    
      setLoggedIn(json);
    }
    loggedIn();
  }, [])

  if (!loggedIn) {
    location.href = 'http://localhost:8080/';
    alert('Please log in!')
  }

  function handleSubmit(){
    const id1 = document.getElementById('userSign').value
    const id2 = document.getElementById('partnerSign').value
    setSign1(document.getElementById('userSign').options[id1].innerText);
    setSign2(document.getElementById('partnerSign').options[id2].innerText);

    const body = {
      id1,
      id2,
    }
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(text => setText(text))
    .catch(err => console.log(err))
    console.log('User:', id1, 'Partner:', id2)
  }

  return (
    <div id="containers">
      <FormContainer handleSubmit={handleSubmit}/>
      <ResultsContainer text={text} sign1={sign1} sign2={sign2}/>
    </div>
  )
}

export default CompatibilityContainer;