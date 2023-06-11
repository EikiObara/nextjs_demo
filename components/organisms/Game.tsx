import styles from "./Game.module.scss";

const Game = ({
  headerElement,
  inputElement,
  hintElement,
  confirmElement,
  buttonElement,
}: {
  headerElement: JSX.Element;
  inputElement: JSX.Element;
  hintElement: JSX.Element;
  confirmElement: JSX.Element;
  buttonElement: JSX.Element;
}) => (
  <div className={styles.game}>
    <div className={styles.header}>{headerElement}</div>
    <div className={styles.main}>
      <div className={styles.hintElement}>{hintElement}</div>
      <div className={styles.confirmElement}>{confirmElement}</div>
      <div className={styles.inputElement}>{inputElement}</div>
      <div className={styles.buttonElements}>{buttonElement}</div>
    </div>
  </div>
);

export default Game;
