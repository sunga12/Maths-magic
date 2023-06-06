const buttons = [
  'AC', '+/-', '%', '/',
  7, 8, 9, 'x',
  4, 5, 6, '-',
  1, 2, 3, '+',
  0, '.', '=',
];

function Calculator() {
  return (
    <div className="calculator">
      <div className="output">
        <p>0</p>
      </div>
      <div className="buttons">
        {buttons.map((button) => (
          <button className="calc-button" type="button" key={button}>{button}</button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
