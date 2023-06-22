export const GAME_STATE = {
  IN_GAME: "IN_GAME",
  FINISHED: "FINISHED",
} as const;

export type GameState = (typeof GAME_STATE)[keyof typeof GAME_STATE];

export const GAME_RESULT = {
  UNDEFINED: "UNDEFINED",
  CORRECT: "CORRECT",
  WRONG: "WRONG",
} as const;

export type GameResult = (typeof GAME_RESULT)[keyof typeof GAME_RESULT];
