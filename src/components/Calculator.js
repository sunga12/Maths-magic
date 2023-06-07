import { useState } from 'react';
import calculate from '../logic/calculate';

const buttons = [
  'AC', '+/-', '%', '÷',
  7, 8, 9, 'x',
  4, 5, 6, '-',
  1, 2, 3, '+',
  0, '.', '=',
];

function Calculator() {
  const [calcDataObj, setCalcDataObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const onClickHandler = (e) => {
    const buttonClicked = e.target.innerText;
    setCalcDataObj(calculate(calcDataObj, buttonClicked));
  };

  const { total, next, operation } = calcDataObj;

  return (
    <div className="calculator">
      <div className="output">
        <p>
          {total}
          {operation}
          {next}
        </p>

      </div>
      <div className="buttons">
        {buttons.map((button) => (
          <button onClick={onClickHandler} className="calc-button" type="button" key={button}>{button}</button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;

// 1. Clicked button with buttonName tto show
// - click handler
