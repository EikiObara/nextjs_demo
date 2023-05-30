import AppTemplate from "../templates/AppTemplate";
import { Question } from "../../lib/models";
import CharacterCard from "../atoms/CharacterCard";
import CardContainer from "../molecules/CardContainer";
import { useCallback, useState } from "react";
import Game from "../organisms/Game";
import AnswerContainer from "../molecules/AnswerContainer";
import HintSentence from "../atoms/HintSentence";

const QuestionPage = ({ question }: { question: Question }) => {
  const [answerOrder, setAnswerOrder] = useState<string[]>([]);
  const [words, setWords] = useState<string[]>(question.text.shuffled);

  const clickCard = useCallback(
    (character: string, index: number) => {
      let tempAnswer = answerOrder;
      tempAnswer.push(character);
      setAnswerOrder([...tempAnswer]);

      let tempWords = words;
      tempWords.splice(index, 1);

      setWords([...tempWords]);
    },
    [answerOrder, setAnswerOrder, setWords]
  );

  const clickableCards = words.map((character, index) => (
    <div key={index} onClick={() => clickCard(character, index)}>
      <CharacterCard character={character} />
    </div>
  ));

  return (
    <AppTemplate>
      <Game
        confirmElement={<AnswerContainer answers={answerOrder} />}
        hintElement={<HintSentence hint={question.text.hint} />}
        inputElement={<CardContainer cards={clickableCards} />}
      />
    </AppTemplate>
  );
};

export default QuestionPage;
