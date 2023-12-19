import React, { useReducer } from "react";
import Display from "./Display";

const ADD_INPUT = "ADD_INPUT";
const CALCULATE = "CALCULATE";
const CLEAR = "CLEAR";

const Calculator = () => {
  const initState = {
    inputs: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ADD_INPUT: {
        return { ...state, inputs: state.inputs + action.payload };
      }
      case CALCULATE: {
        return {
          ...state,
          inputs: state.inputs ? eval(state.inputs).toString() : "",
        };
      }
      case CLEAR: {
        return { ...state, inputs: "" };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const handleOperation = (value) => {
    console.log(value);
    if (value == "=") {
      dispatch({ type: CALCULATE });
    }
    if (value == "C") {
      dispatch({ type: CLEAR });
    }
    if (value != "=" && value != "C") {
      dispatch({ type: ADD_INPUT, payload: value });
    }
  };

  return (
    <div>
      <Display input={state.inputs} />
      <div>
        <button onClick={() => handleOperation("1")}>1</button>
        <button onClick={() => handleOperation("2")}>2</button>
        <button onClick={() => handleOperation("3")}>3</button>
        <br />
        <button onClick={() => handleOperation("4")}>4</button>
        <button onClick={() => handleOperation("5")}>5</button>
        <button onClick={() => handleOperation("6")}>6</button>
        <br />
        <button onClick={() => handleOperation("7")}>7</button>
        <button onClick={() => handleOperation("8")}>8</button>
        <button onClick={() => handleOperation("9")}>9</button>
        <br />
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("0")}>0</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <br />
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("C")}>C</button>
        <button onClick={() => handleOperation("/")}>/</button>
        <br />
        <button onClick={() => handleOperation("=")}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
