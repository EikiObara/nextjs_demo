import { useCallback, useEffect, useState } from "react";
import { Question } from "../models/models";
import { API_ENDPOINTS } from "../constants";

const useQuestion = (): [Question, () => void] => {
  const [question, setQuestion] = useState<Question | undefined>(undefined);

  const updateQuestion = useCallback(() => {
    fetch(API_ENDPOINTS.QUESTION).then((response) => {
      response.json().then((data) => {
        setQuestion(data);
      });
    });
  }, [setQuestion]);

  useEffect(() => {
    updateQuestion();
  }, []);

  return [question, updateQuestion];
};

export default useQuestion;
