import React from "react";

export function Contact() {
  function handelClick() {
    console.log("Hello!");
  }
  return (
    <>
      <p>Contact Page</p>
      <button onClick={handelClick}> Click Me</button>
    </>
  );
}
