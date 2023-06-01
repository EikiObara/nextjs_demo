import { useCallback, useEffect, useState } from "react";
import { Question } from "./models";

const useQuestion = (): [Question, () => void] => {
  const [question, setQuestion] = useState<Question | undefined>();

  const fetchQuestion = useCallback(async () => {
    const response = await fetch('/api/question');
    const data = await response.json();
    setQuestion(data);
  }, [setQuestion]);

  useEffect(() => {
    fetchQuestion();
  }, [fetchQuestion]);

  return [question, fetchQuestion]
};

export default useQuestion;
