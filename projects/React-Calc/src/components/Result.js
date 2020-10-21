import React from 'react';
import './App.css'; // Tell webpack that Button.js uses these styles

function Result(props) {
    return (
        <div className="result">
            <p>{props.result}</p>
        </div>
    );
}

export default Result;