import React from "react";

const EducationSection = ({ formData, handleChange, errors }) => {
  return (
    <div className="education-section">
      <div className="form-group">
        <label>Highest Qualification:</label>
        <select
          name="highestQualification"
          value={formData.highestQualification}
          onChange={handleChange}
        >
          <option value="">Select a qualification</option>
          <option value="High School">High School</option>
          <option value="Bachelor's">Bachelor's</option>
          <option value="Master's">Master's</option>
          <option value="PhD">PhD</option>
        </select>
        {errors.highestQualification && (
          <p className="error">{errors.highestQualification}</p>
        )}
      </div>
      <div className="form-group">
        <label>Field of Study:</label>
        <input
          type="text"
          name="fieldOfStudy"
          value={formData.fieldOfStudy}
          onChange={handleChange}
        />
        {errors.fieldOfStudy && <p className="error">{errors.fieldOfStudy}</p>}
      </div>
    </div>
  );
};

export default EducationSection;
