import React, { useState } from "react";
import "./app.css";
function App() {
  const [value, setValue] = useState("");

  const addSimbol = (simbol: string) => {
    if (value.slice(-1) !== " " && value.slice(-1) !== ".") {
      setValue(value + simbol);
    }
  };

  const deleteBtn = () => {
    if (value.slice(-1) === " ") {
      setValue(value.substring(0, value.length - 3));
    } else if (value.slice(-2) === "0.") {
      setValue(value.substring(0, value.length - 2));
    } else {
      setValue(value.substring(0, value.length - 1));
    }
  };

  const equalBtnManager = () => {
    const expression = eval(value); // eslint-disable-line
    setValue(expression.toString());
  };

  return (
    <div className="App">
      <p className="title">Calculator</p>
      <div>
        <input className="inputs" value={value} readOnly />
      </div>
      <div className="numbers">
        <button className="nBtn" onClick={() => setValue(value + "7")} >
          7
        </button>
        <button className="nBtn" onClick={() => setValue(value + "8")}>
          8
        </button>
        <button className="nBtn" onClick={() => setValue(value + "9")}>
          9
        </button>
        <button
          className="sBtn"
          onClick={() => value.length >= 1 && addSimbol("*")}
        >
          *
        </button>
      </div>
      <div className="numbers">
        <button className="nBtn" onClick={() => setValue(value + "4")}>
          4
        </button>
        <button className="nBtn" onClick={() => setValue(value + "5")}>
          5
        </button>
        <button className="nBtn" onClick={() => setValue(value + "6")}>
          6
        </button>
        <button
          className="sBtn"
          onClick={() => value.length >= 1 && addSimbol("/")}
        >
          /
        </button>
      </div>
      <div className="numbers">
        <button className="nBtn" onClick={() => setValue(value + "1")}>
          1
        </button>
        <button className="nBtn" onClick={() => setValue(value + "2")}>
          2
        </button>
        <button className="nBtn" onClick={() => setValue(value + "3")}>
          3
        </button>
        <button
          className="sBtn"
          onClick={() => value.length >= 1 && addSimbol("-")}
        >
          -
        </button>
      </div>
      <div className="numbers">
        <button className="nBtn" onClick={() => setValue(value + ".")}>
          .
        </button>
        <button className="nBtn" onClick={() => setValue(value + "0")}>
          0
        </button>
        <button className="nBtn" onClick={()=>equalBtnManager()}>
          =
        </button>

        <button
          className="sBtn"
          onClick={() => value.length >= 1 && addSimbol("+")}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="cBtn"
          onClick={() => value.length >= 1 && deleteBtn()}
        >
          Delete
        </button>
        <button className="cBtn" onClick={() => setValue("")}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
