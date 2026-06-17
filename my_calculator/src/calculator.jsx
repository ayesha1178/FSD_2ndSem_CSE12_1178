import { useState } from "react";

function calculator() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.innerText);
  };

  const clearDisplay = () => {
    setValue("");
  };

  const deleteLast = () => {
    setValue(value.slice(0, -1));
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="title">CALCULATOR 🎀</h1>

        <input type="text" value={value} readOnly className="display" />

        <div className="buttons">
          <button onClick={clearDisplay} className="special">
            AC
          </button>

          <button onClick={deleteLast} className="special">
            DEL
          </button>

          <button onClick={handleClick}>%</button>
          <button onClick={handleClick}>/</button>

          <button onClick={handleClick}>7</button>
          <button onClick={handleClick}>8</button>
          <button onClick={handleClick}>9</button>
          <button onClick={handleClick}>*</button>

          <button onClick={handleClick}>4</button>
          <button onClick={handleClick}>5</button>
          <button onClick={handleClick}>6</button>
          <button onClick={handleClick}>-</button>

          <button onClick={handleClick}>1</button>
          <button onClick={handleClick}>2</button>
          <button onClick={handleClick}>3</button>
          <button onClick={handleClick}>+</button>

          <button onClick={handleClick}>0</button>
          <button onClick={handleClick}>.</button>

          <button onClick={calculate} className="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default calculator;