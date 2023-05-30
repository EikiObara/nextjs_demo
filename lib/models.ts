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
