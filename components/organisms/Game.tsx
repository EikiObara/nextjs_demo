import styles from "./Game.module.scss";

const Game = ({
  inputElement,
  hintElement,
  confirmElement,
}: {
  inputElement: JSX.Element;
  hintElement: JSX.Element;
  confirmElement: JSX.Element;
}) => (
  <div className={styles.game}>
    <div className={styles.hintElement}>{hintElement}</div>
    <div className={styles.confirmElement}>{confirmElement}</div>
    <div className={styles.inputElement}>{inputElement}</div>
  </div>
);

export default Game;
