import React from 'react';
import './App.css';
import Result from './components/Result.js'
import KeyPad from './components/KeyPad.js'


class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      result: ""
    }
  }


  calculate() {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (error) {
      this.setState({result : "error"})
    }
  }

  // resets the result box
  reset = () => {
    this.setState(({
      result: ""
    }));
  }

  // backspace button
  backSpace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }


  onClick = (button) => {
    // if button is equal sign button then call the calculate method
    if (button === "=") {
      this.calculate();
    }
    else if (button === "CE") {
      this.backSpace();
    }
    else if (button === "C") {
      this.reset();
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }



  render() {
    return (
      <div className="calculator-body">
        <h1>Calculator</h1>
        <Result result={this.state.result} />
        <KeyPad onClick={this.onClick} />
      </div>
    );
  }
}

export default Calculator;