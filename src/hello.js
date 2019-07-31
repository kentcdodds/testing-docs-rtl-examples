import React from "react";

export default function Hello(props) {
  return props.name === undefined ? (
    <span>Hey, stranger</span>
  ) : (
    <h1>Hello, {props.name}!</h1>
  );
}
