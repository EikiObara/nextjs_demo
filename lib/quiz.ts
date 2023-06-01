import path from "path";
import fs from "fs";
import { Question, Quiz, QuizData } from "./models";
import { shuffleString } from "./shuffle";

const quizDirectory = path.join(process.cwd(), "public/quiz");

const getRandomInt = (max: number) => {
  console.log(max);
  return Math.floor(Math.random() * max);
};

export const getQuiz = (): Quiz => {
  const file = fs.readFileSync(
    path.join(quizDirectory, "japanese.json"),
    "utf8"
  );
  const quizData: QuizData = JSON.parse(file);

  const level: number = getRandomInt(quizData.quiz.length);

  const quizList = quizData.quiz[level].data;

  return quizList[getRandomInt(quizList.length)];
}

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
