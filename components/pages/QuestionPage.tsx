import AppTemplate from "../templates/AppTemplate";
import { GAME_RESULT, GAME_STATE, Question } from "../../lib/models";
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
  const [gameParameters, gameCallbacks] = useGameParameters(question);

  // NOTE: rendering
  const clickableCards = gameParameters.words.map((character, index) => (
    <div key={index} onClick={() => gameCallbacks.clickCard(character, index)}>
      <CharacterCard character={character} />
    </div>
  ));

  const buttons = [
    <div onClick={() => gameCallbacks.reset(question)}>
      <Button text="リセット" />
    </div>,
  ];

  if (gameParameters.gameState === GAME_STATE.FINISHED) {
    buttons.push(
      <div onClick={reloadQuestion}>
        <Button text="次へ" />
      </div>
    );
  }

  return (
    <AppTemplate>
      <Game
        confirmElement={
          <AnswerContainer answers={gameParameters.answerOrder} />
        }
        hintElement={<HintSentence hint={question.text.hint} />}
        inputElement={
          gameParameters.gameState === GAME_STATE.IN_GAME ? (
            <CardContainer cards={clickableCards} />
          ) : (
            <ResultContainer
              isCorrect={gameParameters.isCorrect === GAME_RESULT.CORRECT}
              originalWord={question.text.original}
            />
          )
        }
        buttonElement={<HorizontalButtons buttons={buttons} />}
      />
    </AppTemplate>
  );
};

export default QuestionPage;
