export const btnValues = [
  ["C", "DEL", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

type obj = {
  sign: string;
  num: number;
  result: number;
  op: string;
};

export const numBtnHandler = (e: any, calc: obj, setCalc: Function) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  if (calc.num.toString().length < 16) {
    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      result: !calc.sign ? 0 : calc.result,
      op: calc.num + value,
    });
  }
};

export const commaBtnHandler = (e: any, calc: obj, setCalc: Function) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  setCalc({
    ...calc,
    num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    op: calc.num + value,
  });
};

export const opBtnHandler = (e: any, calc: obj, setCalc: Function) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  setCalc({
    ...calc,
    sign: value,
    result: !calc.result && calc.num ? calc.num : calc.result,
    num: 0,
    op: calc.num + value,
  });
};

export const equalsBtnHandler = (calc: obj, setCalc: Function) => {
  if (calc.sign && calc.num) {
    const math = (a: number, b: number, sign: string) =>
      sign === "+"
        ? a + b
        : sign === "-"
        ? a - b
        : sign === "X"
        ? a * b
        : a / b;

    setCalc({
      ...calc,
      result:
        calc.num.toString() === "0" && calc.sign === "/"
          ? "Can't divide with 0"
          : math(Number(calc.result), Number(calc.num), calc.sign),
      sign: "",
      num: 0,
      op: calc.result + calc.sign + calc.num,
    });
  }
};

export const resetBtnHandler = (calc: obj, setCalc: Function) => {
  setCalc({
    ...calc,
    sign: "",
    num: 0,
    result: 0,
    op: "",
  });
};

export const delBtnHandler = (calc: obj, setCalc: Function) => {
  if (calc.num.toString().slice(-1) === " ") {
    setCalc({
      ...calc,
      num: parseInt(
        calc.num.toString().substring(0, calc.num.toString().length - 3)
      ),
      op: calc.num,
    });
  } else if (calc.num.toString().slice(-2) === "0.") {
    setCalc({
      ...calc,
      num: parseInt(
        calc.num.toString().substring(0, calc.num.toString().length - 2)
      ),
      op: calc.num,
    });
  } else {
    setCalc({
      ...calc,
      num: parseInt(
        calc.num.toString().substring(0, calc.num.toString().length - 1)
      ),
      op: calc.num,
    });
  }
};

export const onClick = (e: any, btn: string | number, calc: obj, setCalc: Function) => {
  btn === "C"
    ? resetBtnHandler(calc, setCalc)
    : btn === "="
    ? equalsBtnHandler(calc, setCalc)
    : btn === "DEL"
    ? delBtnHandler(calc, setCalc)
    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
    ? opBtnHandler(e, calc, setCalc)
    : btn === "."
    ? commaBtnHandler(e, calc, setCalc)
    : numBtnHandler(e, calc, setCalc);
};
