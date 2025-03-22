import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (input === "0" && value !== ".") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput("0");
  };

  const handleEquals = () => {
    try {
      setInput(eval(input).toString());
    } catch (_) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div id="display">{input}</div>
      <div className="buttons">
        <button id="clear" onClick={handleClear} className="op">
          C
        </button>
        <button id="divide" onClick={() => handleClick("/")} className="op">
          /
        </button>
        <button id="multiply" onClick={() => handleClick("*")} className="op">
          *
        </button>
        <button id="subtract" onClick={() => handleClick("-")} className="op">
          -
        </button>
        <button id="seven" onClick={() => handleClick("7")} className="num">
          7
        </button>
        <button id="eight" onClick={() => handleClick("8")} className="num">
          8
        </button>
        <button id="nine" onClick={() => handleClick("9")} className="num">
          9
        </button>
        <button id="add" onClick={() => handleClick("+")} className="op">
          +
        </button>
        <button id="four" onClick={() => handleClick("4")} className="num">
          4
        </button>
        <button id="five" onClick={() => handleClick("5")} className="num">
          5
        </button>
        <button id="six" onClick={() => handleClick("6")} className="num">
          6
        </button>
        <button id="equals" onClick={handleEquals} className="op">
          =
        </button>
        <button id="one" onClick={() => handleClick("1")} className="num">
          1
        </button>
        <button id="two" onClick={() => handleClick("2")} className="num">
          2
        </button>
        <button id="three" onClick={() => handleClick("3")} className="num">
          3
        </button>
        <button id="zero" onClick={() => handleClick("0")} className="num">
          0
        </button>
        <button id="decimal" onClick={() => handleClick(".")} className="num">
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
