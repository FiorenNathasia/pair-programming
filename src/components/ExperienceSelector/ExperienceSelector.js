import React from "react";
import "./ExperienceSelector.scss";
function ExperienceSelector({ experience, setExperience }) {
  return (
    <div className="experience">
      <p>How do you want to experience your activity?</p>
      {["Solo", "With Friends", "As a Couple", "With Family"].map((option) => (
        <label key={option}>
          <div className="experience__inputs">
            <input
              type="radio"
              name="experience"
              value={option}
              checked={experience === option}
              onChange={(e) => setExperience(e.target.value)}
            />
            {option}
          </div>
        </label>
      ))}
    </div>
  );
}
export default ExperienceSelector;
