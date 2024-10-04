import React from "react";

export function Button(props) {
  return (
    <a href={props.link}>
      <button
        className={` text-white p-5 rounded  font-bold bg-red-500 ${props.css}`}
      >
        {props.text} {props.address}
      </button>
    </a>
  );
}
