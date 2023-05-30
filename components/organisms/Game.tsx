import styles from "./Game.module.scss";

const Game = ({
  inputElement,
  confirmElement,
}: {
  inputElement: JSX.Element;
  confirmElement: JSX.Element;
}) => (
  <div className={styles.game}>
    <div className={styles.confirmElement}>{confirmElement}</div>
    <div className={styles.inputElement}>{inputElement}</div>
  </div>
);

export default Game;
