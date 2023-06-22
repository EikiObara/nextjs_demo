import styles from "./Result.module.scss";
import utilStyles from "../../styles/utils.module.css";
import { GAME_RESULT, GameResult } from "../../lib/models/game";

const RESULT_LABEL = {
  [GAME_RESULT.UNDEFINED]: "答え",
  [GAME_RESULT.CORRECT]: "正解",
  [GAME_RESULT.WRONG]: "不正解",
} as const;

const ResultContainer = ({
  gameResult,
  originalWord,
}: {
  gameResult: GameResult;
  originalWord: string;
}) => {
  const elements = [
    <div className={utilStyles.heading}>{RESULT_LABEL[gameResult]}</div>,
  ];

  if (gameResult !== GAME_RESULT.CORRECT) {
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
