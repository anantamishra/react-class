import React, { useRef, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  // Increment count and update render count
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // Update the ref value on each render
  renderCount.current += 1;

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef Mutable Value Example</h2>
      <p>Count: {count}</p>
      <p>Component re-rendered: {renderCount.current} times</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
