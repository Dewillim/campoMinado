import { useState } from "react";

export const RandomList = ({ list }: { list: string[] }) => {
  const [random, setRandom] = useState<string>("");

  const generateRandom = () => {
    const randomIndex = Math.floor(Math.random() * list.length);
    setRandom(list[randomIndex]);
  };

  return (
    <div>
      <p>Sua palavra: {random}</p>
      <button onClick={generateRandom}>Palavra Aleatória</button>
    </div>
  );
};
//confused -> should I pass list to the component?