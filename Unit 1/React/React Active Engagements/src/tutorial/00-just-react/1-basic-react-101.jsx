import React from "react";

const text = "Press Here";
const num1 = 4;
const num2 = 10;
const app = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <button class="btn" onClick={(e) => handleClick(e)}>
        {text}
      </button>
      <main>{num1 * num2}</main>
    </div>
  );
};

export default app;
