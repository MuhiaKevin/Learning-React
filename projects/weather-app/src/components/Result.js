import React from 'react';

class Result extends React.Component {


    render() {
        return (

            <div className="wrapper">

                <div className="mynav">
                    <h1 className="heading">{this.props.description}</h1>

                    <h3 className="location">{this.props.city}, {this.props.country}</h3>
                    <p className="temp">
                        <span className="temp-value">{this.props.temp}</span>
                        <span className="deg">0</span>
                    </p>


                </div>
            </div>

        );
    }
}

export default Result;
