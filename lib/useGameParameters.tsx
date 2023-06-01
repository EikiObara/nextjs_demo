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
  gameResult: GameResult;
};

export type GameCallbacks = {
  clickCard: (character: string, index: number) => void;
  reset: (question: Question) => void;
  next: () => void;
  giveUp: () => void;
};

const useGameParameters = (
  question: Question,
  reloadQuestion: () => void
): [GameParameter, GameCallbacks] => {
  // NOTE: states
  const [answerOrder, setAnswerOrder] = useState<string[]>([]);
  const [words, setWords] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>(GAME_STATE.IN_GAME);
  const [gameResult, setGameResult] = useState<GameResult>(GAME_RESULT.UNDEFINED);

  // NOTE: User interface
  const clickCard = useCallback(
    (character: string, index: number) => {
      let tempAnswer = answerOrder;
      tempAnswer.push(character);
      setAnswerOrder([...tempAnswer]);

      let tempWords = [...words];
      tempWords.splice(index, 1);

      setWords([...tempWords]);
    },
    [words, answerOrder, setAnswerOrder, setWords]
  );

  const reset = useCallback(
    (question: Question) => {
      setAnswerOrder([]);
      setWords(question.text.shuffled);
      setGameState(GAME_STATE.IN_GAME);
      setGameResult(GAME_RESULT.UNDEFINED);
    },
    [setAnswerOrder, setWords, setGameState, setGameResult]
  );

  const next = useCallback(() => {
    reloadQuestion();
  }, [reloadQuestion]);

  const giveUp = useCallback(
    () => {
      setGameState(GAME_STATE.FINISHED);
      setGameResult(GAME_RESULT.UNDEFINED);
    },
    [setAnswerOrder, setWords, setGameState, setGameResult]
  );

  // NOTE: auto update process
  useEffect(() => {
    if (question) {
      reset(question);
    }
  }, [question]);

  useEffect(() => {
    if (question.text.length === answerOrder.length) {
      const judger: GameJudger = new GameJudger();
      if (judger.isCollect(question.text.original, answerOrder)) {
        setGameResult(GAME_RESULT.CORRECT);
      } else {
        setGameResult(GAME_RESULT.WRONG);
      }
      setGameState(GAME_STATE.FINISHED);
    }
  }, [question, answerOrder, setGameResult, setGameState]);

  return [
    { answerOrder, words, gameState, gameResult },
    {
      clickCard,
      reset,
      next,
      giveUp,
    },
  ];
};

export default useGameParameters;
