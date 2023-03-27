import React from "react";

function ResultsContainer(props) {

  const store = `${props.sign1} & ${props.sign2}`;

  function save () {
    window.localStorage.setItem(store, props.text)
  }

  return (
    <div id="resultsContainer">
      <h2> Results: </h2>
      <p id="resultsBody"> {props.text} </p>
      <p id="save"> Would you like to save your results?  <button id="btn" onClick={save}> Save </button> </p>
    </div>
  )
}

export default ResultsContainer;

    // props.text
