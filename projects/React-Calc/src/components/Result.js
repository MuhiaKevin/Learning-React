import React from 'react';
import './App.css'; // Tell webpack that Button.js uses these styles

class Result extends React.Component {
    render() {
        return (
            <div className="result">
                <p>{this.props.result}</p>
            </div>
            );
        }
    }
    
export default Result;