import { useCallback, useEffect, useState } from "react";
import { Question } from "./models";

const MAX_FETCH_RETRY = 100;

const useQuestion = (): [Question, () => void] => {
  const [question, setQuestion] = useState<Question | undefined>(undefined);

  const updateQuestion = useCallback(async () => {
    const response = await fetch("/api/question");

    setQuestion(await response.json());
  }, [setQuestion]);

  useEffect(() => {
    updateQuestion();
  }, [updateQuestion]);

  return [question, () => updateQuestion()];
};

export default useQuestion;
