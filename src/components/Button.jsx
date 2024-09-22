import React from "react";

export function Button(props) {
  return (
    <a href={props.link}>
      <button className={`${props.css}`}>
        {props.text}- {props.address}
      </button>
    </a>
  );
}
