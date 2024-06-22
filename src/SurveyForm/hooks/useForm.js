import { useState } from "react";

const useForm = (formData) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.surveyTopic)
      newErrors.surveyTopic = "Survey Topic is required";
    if (formData.surveyTopic === "Technology") {
      if (!formData.favoriteProgrammingLanguage)
        newErrors.favoriteProgrammingLanguage =
          "Favorite Programming Language is required";
      if (!formData.yearsOfExperience)
        newErrors.yearsOfExperience = "Years of Experience is required";
    }
    if (formData.surveyTopic === "Health") {
      if (!formData.exerciseFrequency)
        newErrors.exerciseFrequency = "Exercise Frequency is required";
      if (!formData.dietPreference)
        newErrors.dietPreference = "Diet Preference is required";
    }
    if (formData.surveyTopic === "Education") {
      if (!formData.highestQualification)
        newErrors.highestQualification = "Highest Qualification is required";
      if (!formData.fieldOfStudy)
        newErrors.fieldOfStudy = "Field of Study is required";
    }
    if (!formData.feedback) {
      newErrors.feedback = "Feedback is required";
    } else if (formData.feedback.length < 10) {
      newErrors.feedback = "Feedback must be at least 50 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return [errors, validateForm];
};

export default useForm;
