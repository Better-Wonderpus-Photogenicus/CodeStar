import React from "react";
import FormContainer from "./FormContainer.jsx";
import ResultsContainer from "./ResultsContainer.jsx";

function CompatibilityContainer() {
  const [text, setText] = React.useState('')

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

  if (!loggedIn) {location.href = 'http://localhost:8080/'; alert('Please sign in');}
  
  function handleSubmit(){
    const id1 = document.getElementById('userSign').value
    const id2 = document.getElementById('partnerSign').value
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
      <ResultsContainer text={text}/>
    </div>
  )
}

export default CompatibilityContainer;