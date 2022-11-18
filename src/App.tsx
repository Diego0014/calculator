import React, { useState } from "react";
import Display from "./components/display/Display";
import Button from "./components/keyboard/Button";
import Keyboard from "./components/keyboard/Keyboard";
import Title from "./components/title/Title";
import Wrapper from "./components/Wrapper";
import {
  btnValues,
  onClick,
} from "./controllers/controllers";

function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    result: 0,
    op: "",
  });

  return (
    <Wrapper>
      <Title />
      <Display
        value={calc.num ? calc.num : calc.result}
        op={calc.op ? calc.op : ""}
      />
      <Keyboard>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : btn === "DEL" ? "del" : ""}
              value={btn}
              onClick={(e: any) => onClick(e, btn, calc, setCalc)}
            />
          );
        })}
      </Keyboard>
    </Wrapper>
  );
}

export default App;
