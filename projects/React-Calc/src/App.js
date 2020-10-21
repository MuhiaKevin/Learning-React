import React, { useState } from 'react';
import './App.css';
import Result from './components/Result.js'
import KeyPad from './components/KeyPad.js'


function Calculator() {
  const  [result, setResult]  = useState("");

  const calculate = () => {
    try {
      setResult(((eval(result) || "") + ""))

    } catch (error) {
      setResult("error")
    }
  }

  // resets the result box
  const reset = () => {
    setResult("")
  }

  // backspace button
  const backSpace = () => {
    setResult(result.slice(0, -1))
  }


  const onClick = (button) => {
    // if button is equal sign button then call the calculate method
    if (button === "=") {
      calculate();
    }
    else if (button === "CE") {
      backSpace();
    }
    else if (button === "C") {
      reset();
    }
    else {
      setResult(result + button)
    }
  }


  return (
    <div className="calculator-body">
      <h1>Calculator</h1>
      <Result result={result} />
      <KeyPad onClick={onClick} />
    </div>
  )
}

export default Calculator;