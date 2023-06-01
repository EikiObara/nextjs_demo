import styles from "./AnswerContainer.module.scss";
import utilStyles from "../../styles/utils.module.css";

const AnswerContainer = ({ answers }: { answers: string[] }) => {
  return (
    <div className={styles.answerContainer}>
      <div className={styles.answer}>
        <div className={utilStyles.heading}>{answers}</div>
      </div>
    </div>
  );
};

export default AnswerContainer;
