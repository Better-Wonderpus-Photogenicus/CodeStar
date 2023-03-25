import React from "react";
import FormContainer from "./FormContainer.jsx";
import ResultsContainer from "./ResultsContainer.jsx";

function CompatabilityContainer() {
  const [text, setText] = React.useState('')

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

export default CompatabilityContainer;