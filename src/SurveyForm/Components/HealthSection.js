import React from "react";

const HealthSection = ({ formData, handleChange, errors }) => {
  return (
    <div className="health-section">
      <div className="form-group">
        <label>Exercise Frequency:</label>
        <select
          name="exerciseFrequency"
          value={formData.exerciseFrequency}
          onChange={handleChange}
        >
          <option value="">Select frequency</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Rarely">Rarely</option>
        </select>
        {errors.exerciseFrequency && (
          <p className="error">{errors.exerciseFrequency}</p>
        )}
      </div>
      <div className="form-group">
        <label>Diet Preference:</label>
        <select
          name="dietPreference"
          value={formData.dietPreference}
          onChange={handleChange}
        >
          <option value="">Select a diet</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
        </select>
        {errors.dietPreference && (
          <p className="error">{errors.dietPreference}</p>
        )}
      </div>
    </div>
  );
};

export default HealthSection;
