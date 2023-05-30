import QuestionPage from "../components/pages/QuestionPage";
import useQuestion from "../lib/useQuestion";

const Index = () => {
  const [question, reloadQuestion] = useQuestion();
  return question ? (
    <QuestionPage question={question} reloadQuestion={reloadQuestion} />
  ) : (
    <div>Loading ...</div>
  );
};

export default Index;
