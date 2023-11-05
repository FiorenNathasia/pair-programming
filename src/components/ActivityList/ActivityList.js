import React, { useState } from "react";
import activities from "../../data/activity.json";
import ExperienceSelector from "../ExperienceSelector/ExperienceSelector";
import BudgetSlider from "../BudgetSlider/BudgetSlider";
import EnergySelector from "../EnergySelector/EnergySelector";

function ActivityList() {
  const [experience, setExperience] = useState("");
  const [budget, setBudget] = useState(Infinity);
  const [energy, setEnergy] = useState("");
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const energeticCategories = [
    "Nightlife",
    "Concerts and Festivals",
    "Sports",
    "Activities and Games",
  ];
  const relaxedCategories = [
    "Museums",
    "Art Galleries",
    "Themed Exhibitions",
    "Theatre and Shows",
    "Cinema",
    "Beauty and Wellness",
    "Food and Drink",
  ];
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const results = activities.filter((activity) => {
      const withinBudget = parseFloat(activity.price.split("£")[1]) <= budget;
      const matchesExperience =
        !experience || activity.participants.includes(experience);
      let matchesEnergy = true;
      if (energy === "Energetic") {
        matchesEnergy = energeticCategories.includes(activity.type);
      } else if (energy === "Relaxed") {
        matchesEnergy = relaxedCategories.includes(activity.type);
      }
      const isNotWaitlisted = !activity.activity.includes("Waitlist");
      return (
        withinBudget && matchesExperience && matchesEnergy && isNotWaitlisted
      );
    });
    setFilteredActivities(results);
    setIsSubmitted(true);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <ExperienceSelector setExperience={setExperience} />
        <BudgetSlider setBudget={setBudget} />
        <EnergySelector setEnergy={setEnergy} />
        <button type="submit">Find Activities</button>
      </form>
      {isSubmitted && (
        <ul>
          {filteredActivities.map((activity) => (
            <li key={activity.key} className="activity-box">
              <h3>{activity.activity}</h3>
              <p>Date: {activity.date}</p>
              <p>Price: {activity.price}</p>
              <p>Rating: {activity.rating}</p>
              <p>Type: {activity.type}</p>
              <p>Price: {activity.price}</p>
              <p>Link: {activity.link}</p>
              <p>Key: {activity.key}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ActivityList;
