import { QUESTION_TYPE, Question } from "lib/models/models";
import { GetStaticProps } from "next";
import QuestionGame from "components/organisms/QuestionGame";
import useQuestionGame from "lib/hooks/useQuestionGame";
import { createShuffledQuestions } from "@/lib/quiz";

type ProgrammerProps = {
  questions: Question[];
};

const Programmer = ({ questions }: ProgrammerProps) => {
  const [gameParameters, gameCallbacks] = useQuestionGame(questions);

  return <QuestionGame parameters={gameParameters} callbacks={gameCallbacks} />;
};

export const getStaticProps: GetStaticProps<ProgrammerProps> = async () => {
  const props: ProgrammerProps = {
    questions: createShuffledQuestions(QUESTION_TYPE.PROGRAMMER),
  };

  return {
    props: props,
  };
};

export default Programmer;
