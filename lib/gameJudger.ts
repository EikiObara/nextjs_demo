class GameJudger {
  isSame(question: string, answerOrder: string[]) {
    console.log(question);
    console.log(answerOrder.join(""));
    return question === answerOrder.join("");
  }
  
  isCollect(question: string, answerOrder: string[]) {
    return this.isSame(question, answerOrder);
  }
}

export default GameJudger;
