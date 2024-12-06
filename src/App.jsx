import { useState } from "react";
import "./App.css";

function App() {
  const [equation, setEquation] = useState(""); // To store the equation input
  const [res, setRes] = useState(null); // To store the result

  // Function to evaluate the equation
  const calculateResult = () => {
    try {
      // Replace x with * for multiplication and eval the string
      const formattedEquation = equation.replace(/x/g, "*");
      const result = eval(formattedEquation);
      setRes(result);
    } catch (error) {
      setRes("Error");
    }
  };

  const startOperation = (e) => {
    const event = e.target.innerText;

    if (event === "=") {
      calculateResult(); // Calculate result on "="
      setEquation(res);
    } else if (event === "C") {
      setEquation(""); // Clear the equation on "C"
      setRes(null);
    } else {
      setRes(null);
      setEquation((prev) => prev + event); // Append the clicked value to the equation
    }
  };

  return (
    <>
      <div className="calculator-container">
        <div className="display">{res !== null ? res : equation || "0"}</div>
        <div className="inner-container">
          <div className="button" onClick={startOperation}>
            1
          </div>
          <div className="button" onClick={startOperation}>
            2
          </div>
          <div className="button" onClick={startOperation}>
            3
          </div>
          <div className="button" onClick={startOperation}>
            +
          </div>
          <div className="button" onClick={startOperation}>
            4
          </div>
          <div className="button" onClick={startOperation}>
            5
          </div>
          <div className="button" onClick={startOperation}>
            6
          </div>
          <div className="button" onClick={startOperation}>
            -
          </div>
          <div className="button" onClick={startOperation}>
            7
          </div>
          <div className="button" onClick={startOperation}>
            8
          </div>
          <div className="button" onClick={startOperation}>
            9
          </div>
          <div className="button" onClick={startOperation}>
            x
          </div>
          <div className="button" onClick={startOperation}>
            (
          </div>
          <div className="button" onClick={startOperation}>
            0
          </div>
          <div className="button" onClick={startOperation}>
            )
          </div>
          <div className="button" onClick={startOperation}>
            /
          </div>
          <div className="button equal" onClick={startOperation}>
            =
          </div>
          <div className="button clear" onClick={startOperation}>
            C
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
