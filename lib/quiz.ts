import path from "path";
import fs from "fs";
import { Question, Quiz, QuizData } from "./models";
import { shuffleString } from "./shuffle";

const quizDirectory = path.join(process.cwd(), "public/quiz");

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const getQuestion = async (): Promise<Question> => {
  const file = fs.readFileSync(
    path.join(quizDirectory, "japanese.json"),
    "utf8"
  );
  const quizData: QuizData = JSON.parse(file);

  const quizNumber: number = getRandomInt(quizData.quiz.length);

  const quiz: Quiz = quizData.quiz[0].data[quizNumber];

  return {
    text: {
      original: quiz.text,
      shuffled: shuffleString(quiz.text).split(""),
      length: quiz.text.length,
      hint: quiz.hint,
    },
  };
};
