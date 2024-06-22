import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

const useFetchQuestions = () => {
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  const fetchQuestions = async (surveyTopic) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, `questions/${surveyTopic}/${surveyTopic}Questions`)
      );
      console.log("surveyTopic", surveyTopic);
      const questions = querySnapshot.docs.map((doc) => doc.data());
      setAdditionalQuestions(questions);
      console.log("questions:", questions);
    } catch (error) {
      console.error("Error fetching additional questions:", error);
    }
  };

  return { additionalQuestions, fetchQuestions };
};

export default useFetchQuestions;
