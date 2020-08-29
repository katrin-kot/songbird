import React from "react";

function GameOver(props) {
  if (props.score === 30) {
    return (
      <div className="row final-window">
        <h1>Поздравляем!</h1>
        <h4>Ты стал обладателем хрустальной совы!</h4>
        <img
          className="final-img"
          src={process.env.PUBLIC_URL + "/assets/win.jpg"}
          alt=""
        />
      </div>
    );
  } else {
    return (
      <div className="row final-window">
        <h1 className="final-caption">Поздравляем!</h1>
        <h4>
          Вы прошли викторину и набрали {props.score} из 30 возможных баллов!
        </h4>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => props.restore()}
        >
          Попробовать ещё раз!
        </button>
      </div>
    );
  }
}

export default GameOver;
