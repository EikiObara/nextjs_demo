import AppTemplate from "../templates/AppTemplate";
import {
  GAME_RESULT,
  GAME_STATE,
  GameResult,
  GameState,
  Question,
} from "../../lib/models";
import CharacterCard from "../atoms/CharacterCard";
import CardContainer from "../molecules/CardContainer";
import Game from "../organisms/Game";
import AnswerContainer from "../molecules/AnswerContainer";
import HintSentence from "../atoms/HintSentence";
import HorizontalButtons from "../organisms/HorizontalButtons";
import Button from "../atoms/Button";
import useGameParameters from "../../lib/useGameParameters";

const QuestionPage = ({
  question,
  reloadQuestion,
}: {
  question: Question;
  reloadQuestion: () => void;
}) => {
  // NOTE: state
  const [gameParameters, gameCallbacks] = useGameParameters(question, reloadQuestion);

  // NOTE: rendering
  const clickableCards = gameParameters.words.map((character, index) => (
    <div key={index} onClick={() => gameCallbacks.clickCard(character, index)}>
      <CharacterCard character={character} />
    </div>
  ));

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
            <div style={{ fontSize: "3rem" }}>
              {gameParameters.isCorrect === GAME_RESULT.CORRECT
                ? "正解"
                : "不正解"}
            </div>
          )
        }
        buttonElement={
          <HorizontalButtons
            buttons={[
              <div onClick={gameCallbacks.reset}>
                <Button text="リセット" />
              </div>,
              <div onClick={()=> {
                reloadQuestion();
              }}>
                <Button text="次へ" />
              </div>,
            ]}
          />
        }
      />
    </AppTemplate>
  );
};

export default QuestionPage;
