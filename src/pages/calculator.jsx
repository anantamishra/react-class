import React, { useState } from "react";

export const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(input);
        if (result === "NaN") {
          setInput("");
        } else {
          setInput(result.toString());
          console.log(result);
        }
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "DEL") {
      if (input === "Error" || input === "Infinity") {
        setInput("");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-orange-500">
      <div className="bg-white rounded-lg shadow-lg p-4 w-80 flex flex-col">
        <div className="bg-[#0f172a] p-4 rounded-lg text-right mb-4 text-white flex flex-col justify-end">
          <input
            className="text-4xl font-bold caret-[#0f172a] bg-inherit text-right justify-end flex "
            disabled
            value={input || "0"}
          />
        </div>
        <div className="grid grid-cols-4 gap-2 last:col-span-2">
          {["C", "DEL", "%", "/"].map((symbol) => (
            <button
              key={symbol}
              onClick={() => handleClick(symbol)}
              className="bg-orange-400 text-white rounded-lg py-4 text-2xl"
            >
              {symbol}
            </button>
          ))}
          {[7, 8, 9, "*"].map((symbol, index) => (
            <button
              key={index}
              onClick={() => handleClick(symbol.toString())}
              className="bg-gray-300 rounded-lg py-4 text-2xl"
            >
              {symbol}
            </button>
          ))}
          {[4, 5, 6, "-"].map((symbol) => (
            <button
              key={symbol}
              onClick={() => handleClick(symbol.toString())}
              className="bg-gray-300 rounded-lg py-4 text-2xl"
            >
              {symbol}
            </button>
          ))}
          {[1, 2, 3, "+"].map((symbol) => (
            <button
              key={symbol}
              onClick={() => handleClick(symbol.toString())}
              className="bg-gray-300 rounded-lg py-4 text-2xl"
            >
              {symbol}
            </button>
          ))}
          {[0, ".", "="].map((symbol, index) => (
            <button
              key={index}
              onClick={() => handleClick(symbol.toString())}
              className={"bg-purple-300  text-white rounded-lg py-4 text-2xl"}
            >
              {symbol}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
