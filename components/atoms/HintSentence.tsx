import styles from "./HintSentence.module.scss";
import utilStyles from "../../styles/utils.module.css";

const HintSentence = ({ hint }: { hint: string }) => {
  return (
    <div className={styles.hintSentence}>
      <span className={utilStyles.article}>{hint}</span>
    </div>
  );
};

export default HintSentence;
