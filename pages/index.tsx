import { getQuestion } from "../lib/quiz";
import { Question } from "../lib/models";
import QuestionPage from "../components/pages/QuestionPage";

const Index = ({ question }: { question: Question }) => {
  return (
    <QuestionPage question={question}/>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      question: await getQuestion(),
    },
  };
};

export default Index;
