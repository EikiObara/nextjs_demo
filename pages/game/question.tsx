import { QUIZ_TYPE, Question, QuizData } from "../../lib/models/models";
import { GetStaticProps } from "next";
import { readQuizJson } from "../../lib/quiz";
import { shuffleArray, shuffleString } from "../../lib/processor/shuffle";
import QuestionGame from "../../components/organisms/QuestionGame";
import useQuestionGame from "../../lib/hooks/useQuestionGame";

type QuestionProps = {
  questions: Question[];
};

const Question = ({ questions }: QuestionProps) => {
  const [gameParameters, gameCallbacks] = useQuestionGame(questions);

  return <QuestionGame parameters={gameParameters} callbacks={gameCallbacks} />;
};

export const getStaticProps: GetStaticProps<QuestionProps> = async () => {
  const quiz: QuizData = readQuizJson(QUIZ_TYPE.PROGRAMMING);

  const questions = quiz.quiz[0].data.map((q) => {
    return {
      text: {
        original: q.text,
        shuffled: shuffleString(q.text).split(""),
        length: q.text.length,
        hint: q.hint,
      },
    };
  });

  const props: QuestionProps = { questions: shuffleArray(questions) };

  return {
    props: props,
  };
};

export default Question;
