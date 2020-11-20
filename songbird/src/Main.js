import React from "react";
import QuestionBlock from "./QuestionBlock";
import AnswerBlock from "./AnswerBlock/AnswerBlock";
import { StoreContext } from "./StoreContext";
import GameOver from "./GameOver";

class Main extends React.Component {
  static contextType = StoreContext;
  render() {
    const { score, currentLevel, restoreInitialState } = this.context;
    if (currentLevel === 6) {
      return (
        <main>
          <GameOver score={score} restore={restoreInitialState} />
        </main>
      );
    }
    return (
      <main>
        <QuestionBlock />
        <AnswerBlock />
      </main>
    );
  }
}

export default Main;
