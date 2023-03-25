import React from "react";

function ResultsContainer(props) {
  return (
    <div id="resultsContainer">
      <h2> Results: </h2>
      <p id="resultsBody"> {props.text} </p>
      <p id="save"> Would you like to save your results?  <button id="btn" type='submit'> Save </button> </p>
    </div>
  )
}

export default ResultsContainer;

    // props.text
