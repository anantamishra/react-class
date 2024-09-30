import React, { useState } from "react";

export function Operation() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert("Please enter valid numbers!");
      return;
    }

    let calcResult;

    // Using if-else logic instead of switch
    if (operation === "add") {
      calcResult = n1 + n2;
    } else if (operation === "subtract") {
      calcResult = n1 - n2;
    } else if (operation === "multiply") {
      calcResult = n1 * n2;
    } else if (operation === "divide") {
      if (n2 === 0) {
        alert("Cannot divide by zero!");
        return;
      }
      calcResult = n1 / n2;
    } else {
      calcResult = 0;
    }

    setResult(calcResult);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[88vh] bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Simple Calculator</h1>

      <div className="mb-4">
        <p>Value 1:</p>
        <input
          type="number"
          placeholder="Enter first number"
          onChange={(e) => setNum1(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-64"
        />
      </div>

      <div className="mb-4">
        <p>Value 2:</p>
        <input
          type="number"
          placeholder="Enter second number"
          onChange={(e) => setNum2(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-64"
        />
      </div>

      <div className="mb-4">
        <select
          onChange={(e) => setOperation(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-64"
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </div>

      <div className="mb-4">
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Calculate
        </button>
      </div>

      {result !== null && (
        <h2 className="text-2xl font-bold">Result: {result}</h2>
      )}
    </div>
  );
}
