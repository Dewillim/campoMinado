//import React from "react"

type greetProps = {
  name: string,
  age: string
};

const divStyle = {
  alignItems: "center",
  justifyContent: "center",
  color: "blue",
}

// arrow function com CSS objeto
export const Greeting = ({ name, age }: greetProps) => (
    <div style={divStyle}>
      <h1>Yooooo, {name}, you are {age} years old. </h1>
    </div>
  );