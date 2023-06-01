import { NextApiRequest, NextApiResponse } from "next";
import { getQuiz } from "../../lib/quiz";
import { shuffleString } from "../../lib/shuffle";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const quiz = getQuiz();
  res.status(200).json({
    text: {
      original: quiz.text,
      shuffled: shuffleString(quiz.text).split(""),
      length: quiz.text.length,
      hint: quiz.hint,
    },
  });
};
