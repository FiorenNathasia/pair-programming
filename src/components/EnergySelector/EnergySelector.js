import React from "react";
import "./EnergySelector.scss";
function EnergySelector({ energy, setEnergy }) {
  return (
    <div className="energy">
      <p>What's your energy preference for the activity?</p>
      {["Energetic", "Relaxed", "No Preference"].map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="energy"
            value={option}
            checked={energy === option}
            onChange={(e) => setEnergy(e.target.value)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}
export default EnergySelector;
