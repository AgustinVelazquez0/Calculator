import { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [clear, setClear] = useState(false);

  const handleClick = (value) => {
    if (
      !isNaN(value) ||
      value === "." ||
      ["/", "*", "-", "+", "%"].includes(value)
    ) {
      if (clear) {
        setCalc(value);
        setClear(false);
      } else {
        setCalc((prev) => prev + value);
      }
    }

    if (value === "AC") {
      setCalc("");
    }

    if (value === "CE") {
      setCalc((prev) => prev.slice(0, -1));
    }

    if (value === "=") {
      try {
        setCalc(eval(calc).toString());
        setClear(true);
      } catch {
        setCalc("Error");
      }
    }

    if (value === "Ans") {
      setClear(false);
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" className="textbox" value={calc} readOnly />
      <div className="buttons">
        {[
          "AC",
          "CE",
          "%",
          "/",
          "7",
          "8",
          "9",
          "*",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          ".",
          "0",
          "Ans",
          "=",
        ].map((btn) => (
          <button key={btn} className="button" onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
