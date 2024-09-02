//import React from "react"

type greetProps = {
  name: string,
  age: string
};

// normal function com CSS inline
export function Greeting2({ name, age }: greetProps) {

  return (
    <div style={{
      alignItems: "center",
      justifyContent: "center",
      color: "green",
    }}>
      <h1>Heyyy, {name}. Congrats on turning {age} years old!</h1>
    </div>
  );
};