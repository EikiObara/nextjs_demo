import path from "path";
import fs from "fs";
import {
  QuestionMaterial,
  QuizData,
  QuizType,
  QUIZ_FILES,
  Question,
} from "./models/models";
import { shuffleString, shuffleArray } from "./processor/shuffle";

const quizDirectory = path.join(process.cwd(), "public/quiz/");

export const readQuizJson = (type: QuizType): QuizData => {
  const file = fs.readFileSync(
    path.join(quizDirectory, QUIZ_FILES[type]),
    "utf8"
  );

  return JSON.parse(file);
};

export const readQuestionMaterialCsv = (type: QuizType): QuestionMaterial => {
  const programmingQuestionDirectory = path.join(
    process.cwd(),
    "public/quiz/programming"
  );

  const file = fs.readFileSync(
    path.join(programmingQuestionDirectory, QUIZ_FILES[type]),
    "utf8"
  );

  const data: string[] = file.split("\n");

  return {
    level: type,
    data: data.map((e) => {
      const params = e.split(",");
      return {
        text: params[0],
        hint: params[1],
      };
    }),
  };
};

export const createShuffledQuestions = (type: QuizType): Question[] => {
  const questionMaterial: QuestionMaterial = readQuestionMaterialCsv(type);

  const questions = questionMaterial.data.map((q) => {
    return {
      text: {
        original: q.text,
        shuffled: shuffleString(q.text).split(""),
        length: q.text.length,
        hint: q.hint,
      },
    };
  });

  return shuffleArray(questions);
};
