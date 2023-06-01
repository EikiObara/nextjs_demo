import AppTemplate from "../templates/AppTemplate";
import { GAME_STATE, Question } from "../../lib/models";
import CharacterCard from "../atoms/CharacterCard";
import CardContainer from "../molecules/CardContainer";
import Game from "../organisms/Game";
import AnswerContainer from "../molecules/AnswerContainer";
import HintSentence from "../atoms/HintSentence";
import HorizontalButtons from "../organisms/HorizontalButtons";
import Button from "../atoms/Button";
import useGameParameters from "../../lib/useGameParameters";
import ResultContainer from "../molecules/Result";

const QuestionPage = ({
  question,
  reloadQuestion,
}: {
  question: Question;
  reloadQuestion: () => void;
}) => {
  // NOTE: game controller
  const [gameParameters, gameCallbacks] = useGameParameters(
    question,
    reloadQuestion
  );

  // NOTE: rendering
  const clickableCards = gameParameters.words.map((character, index) => (
    <div key={index} onClick={() => gameCallbacks.clickCard(character, index)}>
      <CharacterCard character={character} />
    </div>
  ));

  const buttons = [
    <HorizontalButtons
      buttons={[
        <div onClick={() => gameCallbacks.reset(question)}>
          <Button text="リセット" />
        </div>,
        <div onClick={() => gameCallbacks.giveUp()}>
          <Button text="ギブ" />
        </div>,
      ]}
    />,
  ];

  if (gameParameters.gameState === GAME_STATE.FINISHED) {
    buttons.push(
      <div onClick={gameCallbacks.next}>
        <Button text="次の問題" />
      </div>
    );
  }

  return (
    <Game
      confirmElement={<AnswerContainer answers={gameParameters.answerOrder} />}
      hintElement={<HintSentence hint={question.text.hint} />}
      inputElement={
        gameParameters.gameState === GAME_STATE.IN_GAME ? (
          <CardContainer cards={clickableCards} />
        ) : (
          <ResultContainer
            gameResult={gameParameters.gameResult}
            originalWord={question.text.original}
          />
        )
      }
      buttonElement={<HorizontalButtons buttons={buttons} />}
    />
  );
};

export default QuestionPage;
