import React from 'react';

class FormArea extends React.Component {


    render() {
        return (
            <div className="bottom">
                <div className="wrapper">
                    <form onSubmit={this.props.loadWeather}>
                        <div className="row">
                            <div className="form-group ">
                                <input type="text" className="form-control" name="city" placeholder="Search City..." />
                            </div>
                        </div>
                        <button className="btn btn-primary">Get Weather</button>
                    </form>


                </div>
            </div >
        );
    }
}

export default FormArea;
