import path from "path";
import fs from "fs";
import {
  Question,
  Quiz,
  QuizData,
  QuizType,
  QUIZ_FILES,
  QUIZ_TYPE,
} from "./models/models";
import { shuffleString } from "./processor/shuffle";

const quizDirectory = path.join(process.cwd(), "public/quiz");

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const getQuiz = (): Quiz => {
  const file = fs.readFileSync(
    path.join(quizDirectory, QUIZ_FILES[QUIZ_TYPE.PROGRAMMING]),
    "utf8"
  );
  const quizData: QuizData = JSON.parse(file);

  const level: number = getRandomInt(quizData.quiz.length);

  const quizList = quizData.quiz[level].data;

  return quizList[getRandomInt(quizList.length)];
};

export const getQuestion = async (): Promise<Question> => {
  const quiz = getQuiz();

  return {
    text: {
      original: quiz.text,
      shuffled: shuffleString(quiz.text).split(""),
      length: quiz.text.length,
      hint: quiz.hint,
    },
  };
};
