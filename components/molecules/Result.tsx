import styles from "./Result.module.scss";
import utilStyles from "../../styles/utils.module.css";

const ResultContainer = ({
  isCorrect,
  originalWord,
}: {
  isCorrect: boolean;
  originalWord: string;
}) => {
  const elements = [
    <div className={utilStyles.heading}>{isCorrect ? "正解" : "不正解"}</div>,
  ];

  if (!isCorrect) {
    elements.push(<div className={utilStyles.article}>{originalWord}</div>);
  }

  return (
    <div className={styles.result}>
      {elements.map((elem, index) => (
        <div key={index} className={styles.element}>
          {elem}
        </div>
      ))}
    </div>
  );
};

export default ResultContainer;
