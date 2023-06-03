import { useCallback, useEffect, useState } from "react";
import { Question } from "./models";

const MAX_FETCH_RETRY = 100;

const isNewQuestion = (pasts: string[], question: Question) => {
  return pasts.includes(question.text.original);
};

const fetchQuestion = async (pasts: string[]) => {
  for (let i = 0; i < MAX_FETCH_RETRY; i++) {
    const response = await fetch("/api/question");
    const data: Question = await response.json();
    if (!isNewQuestion(pasts, data)) {
      return data;
    }
  }
};

const useQuestion = (): [Question, () => void] => {
  const [question, setQuestion] = useState<Question | undefined>(undefined);
  const [pasts, setPasts] = useState<string[]>([]);

  const updateQuestion = useCallback(async (pasts: string[]) => {
    const question = await fetchQuestion(pasts);

    // FIXME: 終わりの挙動を作る
    if (question) {
      setQuestion(question);
      setPasts([...pasts, question.text.original]);
    }
  }, []);

  useEffect(() => {
    updateQuestion(pasts);
  }, [updateQuestion]);

  return [question, () => updateQuestion(pasts)];
};

export default useQuestion;
