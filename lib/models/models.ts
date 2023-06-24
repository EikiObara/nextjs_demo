export type Question = {
  text: {
    original: string;
    shuffled: string[];
    length: number;
    hint: string;
  };
};

export type QuestionMaterialCsvColumn = {
  text: string;
  hint: string;
};

export type QuestionMaterial = {
  level: number | string;
  data: QuestionMaterialCsvColumn[];
};

export type QuizData = {
  quiz: QuestionMaterial[];
};

export const QUESTION_TYPE = {
  CODER: "CODER",
  PROGRAMMER: "PROGRAMMER",
  WEB_ENGINEER: "WEB_ENGINEER",
} as const;

export type QuizType = (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE];

export const QUIZ_FILES = {
  [QUESTION_TYPE.CODER]: "coder.csv",
  [QUESTION_TYPE.PROGRAMMER]: "programmer.csv",
  [QUESTION_TYPE.WEB_ENGINEER]: "web_engineer.csv",
} as const;
