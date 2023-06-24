import { QUESTION_TYPE, Question, QuestionMaterial } from "lib/models/models";
import { GetStaticProps } from "next";
import { createShuffledQuestions, readQuestionMaterialCsv } from "lib/quiz";
import { shuffleArray, shuffleString } from "lib/processor/shuffle";
import QuestionGame from "components/organisms/QuestionGame";
import useQuestionGame from "lib/hooks/useQuestionGame";

type CoderProps = {
  questions: Question[];
};

const Coder = ({ questions }: CoderProps) => {
  const [gameParameters, gameCallbacks] = useQuestionGame(questions);

  return <QuestionGame parameters={gameParameters} callbacks={gameCallbacks} />;
};

export const getStaticProps: GetStaticProps<CoderProps> = async () => {
  const props: CoderProps = {
    questions: createShuffledQuestions(QUESTION_TYPE.CODER),
  };

  return {
    props: props,
  };
};

export default Coder;
