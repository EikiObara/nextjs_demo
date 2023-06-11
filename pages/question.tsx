import Loading from "../components/atoms/Loading";
import QuestionPage from "../components/pages/QuestionPage";
import useQuestion from "../lib/useQuestion";

const Question = () => {
  const [question, reloadQuestion] = useQuestion();
  return question ? <QuestionPage question={question} reloadQuestion={reloadQuestion} /> : <Loading/>;
};

export default Question;
