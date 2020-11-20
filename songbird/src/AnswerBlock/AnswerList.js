import React from "react";

function AnswerList(props) {
  const { answers, onItemClick, color } = props;
  const answerItems = answers.map((answer, idx) => (
    <li
      onClick={() => onItemClick(answer, idx)}
      key={idx}
      className="list-group-item list-group-item-action active"
    >
      <div className={`indicator ${color[idx]}`}></div>
      {answer}
    </li>
  ));
  return <div className="col-12 col-sm-6 list-group">{answerItems}</div>;
}

export default AnswerList;
