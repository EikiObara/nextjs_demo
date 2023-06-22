class GameJudger {
  isSame(question: string, answerOrder: string[]) {
    return question === answerOrder.join("");
  }
  
  isCollect(question: string, answerOrder: string[]) {
    return this.isSame(question, answerOrder);
  }
}

export default GameJudger;
