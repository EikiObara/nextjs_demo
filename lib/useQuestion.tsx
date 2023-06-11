import { useCallback, useEffect, useState } from "react";
import { Question } from "./models";

const useQuestion = (): [Question, () => void] => {
  const [question, setQuestion] = useState<Question | undefined>(undefined);

  const updateQuestion = useCallback(() => {
    fetch("/api/question").then((response) => {
      response.json().then((data) => {
        setQuestion(data);
      })
    })
  }, [setQuestion]);

  useEffect(() => {
    updateQuestion();
  }, []);

  return [question, updateQuestion];
};

export default useQuestion;
