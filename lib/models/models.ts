export type Question = {
  text: {
    original: string;
    shuffled: string[];
    length: number;
    hint: string;
  };
};

export type Quiz = {
  text: string;
  hint: string;
};

export type QuizList = {
  level: number;
  data: Quiz[];
};

export type QuizData = {
  quiz: QuizList[];
};

export const QUIZ_TYPE = {
  PROGRAMMING: "PROGRAMMING",
} as const;

export type QuizType = (typeof QUIZ_TYPE)[keyof typeof QUIZ_TYPE];

export const QUIZ_FILES = {
  [QUIZ_TYPE.PROGRAMMING]: "programming.json",
} as const;
