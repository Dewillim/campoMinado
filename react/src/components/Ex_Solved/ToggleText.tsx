import { useState } from "react";

export const ToggleText = () => {
  const [text, setText] = useState("Biscoito");

  const toggleText = () => {
    setText((prevText) => (prevText === "Biscoito" ? "Bolacha" : "Biscoito"));
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={toggleText}>Toggle Text</button>
    </div>
  );
};
