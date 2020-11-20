import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      className="btn col-10 col-sm-12 btn-secondary"
      disabled={props.disabled}
      onClick={() => {
        props.onChangeLevel();
        props.onChangeAnswers();
      }}
    >
      Next Level
    </button>
  );
}

export default Button;
