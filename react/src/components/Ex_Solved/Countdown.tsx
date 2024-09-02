import { useState } from "react";

export const Countdown = () => {
  const [contador, setContagem] = useState(10);

  const decrementar = () => {
    setContagem(contador - 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={decrementar} disabled={contador === 0}>Decrementar</button>
    </div>
  );
};