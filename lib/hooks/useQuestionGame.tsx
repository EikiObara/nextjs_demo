import { useCallback, useEffect, useState } from "react";
import { Question } from "../models/models";
import GameJudger from "../processor/gameJudger";
import { GameCallbacks, GameParameter } from "../type_defs/questionGame";
import { GameState, GAME_STATE, GameResult, GAME_RESULT } from "../models/game";

const useQuestionGame = (
  questions: Question[]
): [GameParameter, GameCallbacks] => {
  // NOTE: states
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(
    questions[0]
  );
  const [words, setWords] = useState<string[]>(questions[0].text.shuffled);

  const [answerOrder, setAnswerOrder] = useState<string[]>([]);

  const [gameState, setGameState] = useState<GameState>(GAME_STATE.IN_GAME);
  const [gameResult, setGameResult] = useState<GameResult>(
    GAME_RESULT.UNDEFINED
  );

  const isGameFinished = useCallback(
    (answerOrder: string[]) => {
      if (currentQuestion.text.length === answerOrder.length) {
        const judger: GameJudger = new GameJudger();
        if (judger.isCollect(currentQuestion.text.original, answerOrder)) {
          setGameResult(GAME_RESULT.CORRECT);
        } else {
          setGameResult(GAME_RESULT.WRONG);
        }
        setGameState(GAME_STATE.FINISHED);
      }
    },
    [currentQuestion, setGameResult, setGameState]
  );

  // NOTE: User interface
  const clickCard = useCallback(
    (character: string, index: number) => {
      let tempAnswer = answerOrder;
      tempAnswer.push(character);
      setAnswerOrder([...tempAnswer]);

      let tempWords = [...words];
      tempWords.splice(index, 1);
      setWords([...tempWords]);

      isGameFinished(tempAnswer);
    },
    [answerOrder, words]
  );

  const reset = useCallback(() => {
    setAnswerOrder([]);
    setCurrentQuestion(currentQuestion);
    setWords(currentQuestion.text.shuffled);
    setGameState(GAME_STATE.IN_GAME);
    setGameResult(GAME_RESULT.UNDEFINED);
  }, [currentQuestion]);

  const giveUp = useCallback(() => {
    setGameState(GAME_STATE.FINISHED);
    setGameResult(GAME_RESULT.UNDEFINED);
  }, []);

  const next = useCallback(() => {
    if (questionIndex < questions.length) {
      const nextQuestionIndex = questionIndex + 1;
      const nextQuestion = questions[nextQuestionIndex];
      setCurrentQuestion(nextQuestion);
      setWords(nextQuestion.text.shuffled);
      setAnswerOrder([]);
      setGameState(GAME_STATE.IN_GAME);
      setGameResult(GAME_RESULT.UNDEFINED);
      setQuestionIndex(nextQuestionIndex);
    }
  }, [questionIndex]);

  return [
    { currentQuestion, answerOrder, words, gameState, gameResult },
    {
      clickCard,
      reset,
      next,
      giveUp,
    },
  ];
};

export default useQuestionGame;
