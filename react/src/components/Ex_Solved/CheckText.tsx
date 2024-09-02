import { useState } from "react";

export const CheckText = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div>
      <p style={{ textDecoration: isChecked ? "line-through" : "none" }}>Visita Bionicenter</p>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
};
