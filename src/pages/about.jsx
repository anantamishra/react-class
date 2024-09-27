import React, { useState } from "react";

export function About() {
  const [name, setName] = useState(0);
  function sum() {
    setName(name + 1);
  }
  function reset() {
    setName(0);
  }
  return (
    <div className="m-5 gap-5  justify-center items-center text-red-400  hidden lg:flex">
      Value: {name}
      <button onClick={sum} className="p-2 text-white bg-blue-500 rounded">
        Increament +
      </button>
      <button
        onClick={reset}
        className="p-2 text-white bg-red-500 hover:animate-pulse rounded"
      >
        Reset
      </button>
    </div>
  );
}
