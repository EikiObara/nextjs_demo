import { GameResult, GameState } from "../models/game";
import { Question } from "../models/models";

export type GameParameter = {
  currentQuestion: Question;
  answerOrder: string[];
  words: string[];
  gameState: GameState;
  gameResult: GameResult;
};

export type GameCallbacks = {
  clickCard: (character: string, index: number) => void;
  reset: () => void;
  next: () => void;
  giveUp: () => void;
};
