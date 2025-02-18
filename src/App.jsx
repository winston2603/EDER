import { useState } from "react";
import "./App.css";

function App() {
  // State for counter
  const [count, setCount] = useState(0);

  // State for calculator
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // Counter functions
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => count > 0 && setCount(count - 1);
  const handleReset = () => setCount(0);

  // Calculator function
  const handleCalculate = (operation) => {
    if (num1 === "" || num2 === "") {
      setResult("Enter both numbers");
      return;
    }

    const number1 = Number(num1);
    const number2 = Number(num2);
    let res;

    switch (operation) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      case "/":
        res = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
        break;
      default:
        return;
    }

    setResult(res);
  };

  return (
    <div className="container">
      {/* Counter Section */}
      <h1>Counter: {count}</h1>
      <div className="counter-buttons">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} disabled={count === 0}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {/* Calculator Section */}
      <h2>Basic Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <div className="calculator-buttons">
        <button onClick={() => handleCalculate("+")}>+</button>
        <button onClick={() => handleCalculate("-")}>-</button>
        <button onClick={() => handleCalculate("*")}>*</button>
        <button onClick={() => handleCalculate("/")} disabled={num2 === "0"}>
          /
        </button>
      </div>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default App;
