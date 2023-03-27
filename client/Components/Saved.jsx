import React from 'react';

function Saved (props) {
    return (
        <div>
            <div id='savedName'>
            {props.el}
            </div>
            <div id='savedText'>
            {props.text}
            </div>
        </div>
    )
}

export default Saved;