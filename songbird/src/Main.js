import React from 'react';
import QuestionBlock from './QuestionBlock';
import AnswerBlock from './AnswerBlock';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <QuestionBlock />
        <AnswerBlock />
      </main>
    );
  }
}

export default Main;
