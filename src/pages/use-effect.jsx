import React, { useState } from "react";

export function SumInputs() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const calculateSum = (value1, value2) => {
    return Number(value1) + Number(value2);
  };

  const updateSum = () => {
    const total = calculateSum(input1, input2);
    setSum(total);
  };

  return (
    <div className="flex  justify-between items-center container mx-auto">
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={input1}
        onChange={handleInput1Change}
        placeholder="Enter first number"
        className="border-2 border-black rounded p-2"
      />
      <br />

      <input
        type="number"
        value={input2}
        onChange={handleInput2Change}
        placeholder="Enter second number"
        className="border-2 border-black rounded p-2"
      />
      <br />

      <button
        onClick={updateSum}
        className="bg-blue-600 text-white rounded px-3 py-2 hover:animate-pulse"
      >
        Calculate Sum
      </button>

      <p>The sum is: {sum}</p>
    </div>
  );
}
