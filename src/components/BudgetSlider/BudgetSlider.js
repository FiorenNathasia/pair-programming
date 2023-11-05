import React from "react";
import "./BudgetSlider.scss";

function BudgetSlider({ budget, setBudget }) {
  return (
    <div className="budget">
      <p>Set Your Budget for the Activity:</p>
      <input
        type="range"
        min="0"
        max="200"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />
      <span>£{budget}</span>
    </div>
  );
}
export default BudgetSlider;
