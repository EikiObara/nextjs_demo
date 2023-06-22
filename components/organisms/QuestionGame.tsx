import { useMemo } from "react";
import { GameCallbacks, GameParameter } from "../../lib/type_defs/questionGame";
import Button from "../atoms/Button";
import CharacterCard from "../atoms/CharacterCard";
import HorizontalButtons from "../templates/HorizontalButtons";
import styles from "./QuestionGame.module.scss";
import { GAME_STATE } from "../../lib/models/game";
import Link from "next/link";
import BackButton from "../molecules/BackButton";
import AnswerContainer from "../molecules/AnswerContainer";
import HintSentence from "../atoms/HintSentence";
import CardContainer from "../molecules/CardContainer";
import ResultContainer from "../molecules/Result";

const QuestionGame = ({
  parameters,
  callbacks,
}: {
  parameters: GameParameter;
  callbacks: GameCallbacks;
}) => {
  const backHomeLink = useMemo(
    () => (
      <Link href="/">
        <BackButton />
      </Link>
    ),
    []
  );
  const answerContainer = useMemo(
    () => <AnswerContainer answers={parameters.answerOrder} />,
    [parameters.answerOrder]
  );

  const clickableCards = parameters.words.map((character, index) => (
    <div key={index} onClick={() => callbacks.clickCard(character, index)}>
      <CharacterCard character={character} />
    </div>
  ));

  const buttonElement = useMemo(
    () => (
      <HorizontalButtons
        buttons={[
          <HorizontalButtons
            buttons={[
              <div onClick={() => callbacks.reset()}>
                <Button text="リセット" />
              </div>,
              <div onClick={() => callbacks.giveUp()}>
                <Button text="ギブ" />
              </div>,
            ]}
          />,
          parameters.gameState === GAME_STATE.FINISHED ? (
            <div onClick={() => callbacks.next()}>
              <Button text="次の問題" />
            </div>
          ) : (
            <></>
          ),
        ]}
      />
    ),
    [parameters.gameState]
  );

  return (
    <div className={styles.questionGame}>
      <div className={styles.header}>{backHomeLink}</div>
      <div className={styles.main}>
        <div className={styles.hintElement}>{answerContainer}</div>
        <div className={styles.confirmElement}>
          <HintSentence hint={parameters.currentQuestion.text.hint} />
        </div>
        <div className={styles.inputElement}>
          {parameters.gameState === GAME_STATE.IN_GAME ? (
            <CardContainer cards={clickableCards} />
          ) : (
            <ResultContainer
              gameResult={parameters.gameResult}
              originalWord={parameters.currentQuestion.text.original}
            />
          )}
        </div>
      </div>
      <div className={styles.footer}>{buttonElement}</div>
    </div>
  );
};

export default QuestionGame;
