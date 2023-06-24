import { QUESTION_TYPE, Question } from "lib/models/models";
import { GetStaticProps } from "next";
import { createShuffledQuestions } from "lib/quiz";
import QuestionGame from "components/organisms/QuestionGame";
import useQuestionGame from "lib/hooks/useQuestionGame";

type WebEngineerProps = {
  questions: Question[];
};

const WebEngineer = ({ questions }: WebEngineerProps) => {
  const [gameParameters, gameCallbacks] = useQuestionGame(questions);

  return <QuestionGame parameters={gameParameters} callbacks={gameCallbacks} />;
};

export const getStaticProps: GetStaticProps<WebEngineerProps> = async () => {
  const props: WebEngineerProps = {
    questions: createShuffledQuestions(QUESTION_TYPE.WEB_ENGINEER),
  };

  return {
    props: props,
  };
};

export default WebEngineer;
