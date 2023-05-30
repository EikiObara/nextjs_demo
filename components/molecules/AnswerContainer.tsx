import styles from "./AnswerContainer.module.scss";

const AnswerContainer = ({ answers }: { answers: string[] }) => {
  return (
    <div className={styles.answerContainer}>
      <div className={styles.answer}>{answers}</div>
    </div>
  );
};

export default AnswerContainer;
