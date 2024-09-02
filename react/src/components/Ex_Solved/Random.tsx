import { useState } from "react";

export const Random = () => {
  // const [random, setRandom] = useState(0);
  let [random, setRandom] = useState(0);

  const generateRandom = () => {
    setRandom(random = Math.round(Math.random()*100));
  };

  return (
    <div>
      <p>Seu número: {random}</p>
      <button onClick={generateRandom}>Gerar Número Aleatório</button>
    </div>
  );
};