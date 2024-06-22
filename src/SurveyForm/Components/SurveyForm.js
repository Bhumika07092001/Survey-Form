import React, { useState } from "react";
import TechnologySection from "./TechnologySection";
import HealthSection from "./HealthSection";
import EducationSection from "./EducationSection";
import useForm from "../hooks/useForm";
import useFetchQuestions from "../hooks/useFetchQuestions";
import "../styles/App.css";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    surveyTopic: "",
    favoriteProgrammingLanguage: "",
    yearsOfExperience: "",
    exerciseFrequency: "",
    dietPreference: "",
    highestQualification: "",
    fieldOfStudy: "",
    feedback: "",
  });
  const [errors, validateForm] = useForm(formData);
  const [showResponse, setShowResponse] = useState(false);
  const [answers, setAnswers] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { additionalQuestions, fetchQuestions } = useFetchQuestions();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAnswer = (e) => {
    const { value } = e.target;
    setAnswers(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.name === "Additional-Questions") {
      setShowResponse(true);
      console.log("amswers submitted succesfuly");
    } else if (e.target.name === "survey-form") {
      if (validateForm()) {
        setIsLoading(true);
        try {
          await fetchQuestions(formData.surveyTopic);
        } catch (error) {
          console.error("Error fetching additional questions:", error);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  return (
    <>
      {showResponse ? (
        <div className="response-message">
          <h2>Thank you for your feedback!</h2>
          <p>Your response has been submitted successfully.</p>
          <div className="submitted-data">
            <h3>Submitted Data:</h3>
            <p>
              <strong>Full Name:</strong> {formData.fullName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Survey Topic:</strong> {formData.surveyTopic}
            </p>
            <p>
              <strong>Feedback:</strong> {formData.feedback}
            </p>
          </div>
        </div>
      ) : (
        <div className="survey-form">
          {isLoading && (
            <div className="spinner-overlay">
              <div className="spinner"></div>
            </div>
          )}
          <h1>Survey Form</h1>
          {additionalQuestions.length === 0 && (
            <form name="survey-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <p className="error">{errors.fullName}</p>}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label>Survey Topic:</label>
                <select
                  name="surveyTopic"
                  value={formData.surveyTopic}
                  onChange={handleChange}
                >
                  <option value="">Select a topic</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                </select>
                {errors.surveyTopic && (
                  <p className="error">{errors.surveyTopic}</p>
                )}
              </div>
              {formData.surveyTopic === "Technology" && (
                <TechnologySection
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}
              {formData.surveyTopic === "Healthcare" && (
                <HealthSection
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}
              {formData.surveyTopic === "Education" && (
                <EducationSection
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}
              <div className="form-group">
                <label>Feedback:</label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                ></textarea>
                {errors.feedback && <p className="error">{errors.feedback}</p>}
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          )}

          {additionalQuestions.length > 0 && (
            <form name="Additional-Questions" onSubmit={(e) => handleSubmit(e)}>
              <div className="additional-questions">
                <h2>Additional Questions</h2>
                {additionalQuestions.map((question, index) => (
                  <div key={index} className="form-group">
                    <label>{question.label}:</label>
                    <input
                      type={question.type}
                      name="answers"
                      onChange={(e) => handleAnswer(e, question.label)}
                      value={answers}
                      required
                    />
                  </div>
                ))}
                <button type="submit" className="submit-btn">
                  Submit Answers
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default SurveyForm;
