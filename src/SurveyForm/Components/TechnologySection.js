import React from "react";

const TechnologySection = ({ formData, handleChange, errors }) => {
  return (
    <div className="technology-section">
      <div className="form-group">
        <label>Favorite Programming Language:</label>
        <select
          name="favoriteProgrammingLanguage"
          value={formData.favoriteProgrammingLanguage}
          onChange={handleChange}
        >
          <option value="">Select a language</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C#">C#</option>
        </select>
        {errors.favoriteProgrammingLanguage && (
          <p className="error">{errors.favoriteProgrammingLanguage}</p>
        )}
      </div>
      <div className="form-group">
        <label>Years of Experience:</label>
        <input
          type="number"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
        />
        {errors.yearsOfExperience && (
          <p className="error">{errors.yearsOfExperience}</p>
        )}
      </div>
    </div>
  );
};

export default TechnologySection;
