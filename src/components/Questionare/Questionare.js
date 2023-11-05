import React, { useState } from "react";
import ExperienceSelector from "../ExperienceSelector/ExperienceSelector";
import BudgetSlider from "../BudgetSlider/BudgetSlider";
import EnergySelector from "../EnergySelector/EnergySelector";
import activities from "../../data/activity.json";
import "./Questionare.scss";
import SideBarList from "../SideBarList/SideBarList";
// import ActivityList from "../ActivityList/ActivityList";

function Questionnaire() {
  const [experience, setExperience] = useState("");
  const [budget, setBudget] = useState(50);
  const [energy, setEnergy] = useState("");
  const [filteredActivities, setFilteredActivities] = useState([]);
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
  const filterActivities = () => {
    return activities.filter((activity) => {
      if (!activity.participants.includes(experience)) return false;
      const activityPrice = parseFloat(activity.price.split("£")[1]);
      if (activityPrice > budget) return false;
      if (
        energy === "Energetic" &&
        !energeticCategories.includes(activity.type)
      )
        return false;
      if (energy === "Relaxed" && !relaxedCategories.includes(activity.type))
        return false;
      const isNotWaitlisted = !activity.activity.includes("Waitlist");
      return isNotWaitlisted;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const results = filterActivities();
    setFilteredActivities(results);
  };
  return (
    <div className="questionnaire">
      <div className="wrapper">
        <ExperienceSelector
          experience={experience}
          setExperience={setExperience}
        />
        <BudgetSlider budget={budget} setBudget={setBudget} />
        <EnergySelector energy={energy} setEnergy={setEnergy} />
        {/* <p className="alert">No activities found based on your preferences.</p> */}
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className="results">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <a
              href={activity.link}
              target="_blank"
              rel="noopener noreferrer"
              className="activity-link"
            >
              <div className="activity">
                <h3>{activity.activity}</h3>
                <p>Date: {activity.date}</p>
                <p>Price: {activity.price}</p>
                <p>Rating: {activity.rating}</p>
                <p>Type: {activity.type}</p>
              </div>
            </a>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
export default Questionnaire;
