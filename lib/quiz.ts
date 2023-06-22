import path from "path";
import fs from "fs";
import {
  Quiz,
  QuizData,
  QuizType,
  QUIZ_FILES,
  QUIZ_TYPE,
} from "./models/models";

const quizDirectory = path.join(process.cwd(), "public/quiz");

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const readQuizJson = (type: QuizType): QuizData => {
  const file = fs.readFileSync(
    path.join(quizDirectory, QUIZ_FILES[type]),
    "utf8"
  );

  return JSON.parse(file);
};

export const getQuiz = (): Quiz => {
  const quizData: QuizData = readQuizJson(QUIZ_TYPE.PROGRAMMING);

  const level: number = getRandomInt(quizData.quiz.length);

  const quizList = quizData.quiz[level].data;

  return quizList[getRandomInt(quizList.length)];
};
