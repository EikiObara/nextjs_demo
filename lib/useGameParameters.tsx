import { useCallback, useEffect, useState } from "react";
import {
  GAME_RESULT,
  GAME_STATE,
  GameResult,
  GameState,
  Question,
} from "./models";
import GameJudger from "./gameJudger";

export type GameParameter = {
  answerOrder: string[];
  words: string[];
  gameState: GameState;
  isCorrect: GameResult;
};

export type GameCallbacks = {
  clickCard: (character: string, index: number) => void;
  reset: () => void;
};

const useGameParameters = (
  question: Question,
): [GameParameter, GameCallbacks] => {
  const [answerOrder, setAnswerOrder] = useState<string[]>([]);
  const [words, setWords] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>(GAME_STATE.IN_GAME);
  const [isCorrect, setIsCorrect] = useState<GameResult>(GAME_RESULT.IN_GAME);

  const clickCard = useCallback(
    (character: string, index: number) => {
      let tempAnswer = answerOrder;
      tempAnswer.push(character);
      setAnswerOrder([...tempAnswer]);

      let tempWords = [...words];
      tempWords.splice(index, 1);

      setWords([...tempWords]);
    },
    [answerOrder, setAnswerOrder, setWords]
  );

  const reset = useCallback(() => {
    setAnswerOrder([]);
    setWords(question.text.shuffled);
    setGameState(GAME_STATE.IN_GAME);
    setIsCorrect(GAME_RESULT.IN_GAME);
  }, [question, setAnswerOrder, setWords]);

  useEffect(() => {
    if (question) {
      setWords(question.text.shuffled);
    }
  }, [question]);

  useEffect(() => {
    if (question.text.length === answerOrder.length) {
      const judger: GameJudger = new GameJudger();
      if (judger.isCollect(question.text.original, answerOrder)) {
        setIsCorrect(GAME_RESULT.CORRECT);
      } else {
        setIsCorrect(GAME_RESULT.WRONG);
      }
      setGameState(GAME_STATE.FINISHED);
    }
  }, [question, answerOrder, setIsCorrect, setGameState]);

  return [
    { answerOrder, words, gameState, isCorrect },
    {
      clickCard,
      reset,
    },
  ];
};

export default useGameParameters;
