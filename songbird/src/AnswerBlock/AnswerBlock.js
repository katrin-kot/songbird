import React from "react";
import Button from "../Button";
import { playAudio } from "../helpers/PlayAudio";
import correctSound from "../helpers/right.mp3";
import errorSound from "../helpers/error.mp3";
import { StoreContext } from "../StoreContext";
import GameOver from "../GameOver";
import AnswerList from "./AnswerList";
import { GameRules } from "./GameRules";
import { BirdInfo } from "./BirdInfo";

class AnswerBlock extends React.Component {
  static contextType = StoreContext;

  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      indicators: [],
      buttonIsDisabled: true,
      birdInfo: {
        birdImg: "",
        name: "",
        latin: "",
        birdVoice: "",
        birdDescription: "",
      },
      currentBird: "",
    };

    this.changeLevel = this.changeAnswers.bind(this);
  }

  changeAnswers(level) {
    const nextLevel = level + 1;
    const { birds } = this.context;
    if (nextLevel < 6) {
      this.setState({
        answers: birds[nextLevel].map((elem) => elem.name),
        indicators: [],
        buttonIsDisabled: true,
        currentBird: "",
        birdInfo: {
          birdImg: "",
          latin: "",
          birdVoice: "",
          birdDescription: "Нажмите на Play",
        },
      });
    }
  }

  pause = () => {
    const { player } = this.context;
    player.current.audio.current.pause();
  };

  changeBirdInfo(answer, idx, level) {
    const { birds } = this.context;
    const currentBird = birds[level].find((elem) => elem.name === answer);
    const { name, image, species, description, audio } = currentBird;
    const birdInfo = {
      name,
      birdImg: image,
      latin: species,
      birdDescription: description,
      birdVoice: audio,
    };

    this.setState({
      currentBird: answer,
      birdInfo,
    });
    this.checkAnswer(birdInfo, idx);
  }

  checkAnswer({ name, birdImg }, idx) {
    const { indicators } = this.state;
    const { rightAnswer, changeImage, changeName, changeScore } = this.context;
    const newIndicators = [...indicators];
    if (this.state.buttonIsDisabled) {
      if (rightAnswer === name) {
        newIndicators[idx] = "green";
        playAudio(correctSound);
        changeImage(birdImg);
        changeName(name);
        this.pause();
        const mistakeAnswers = newIndicators.filter((elem) => elem === "red");
        const number = Math.abs(mistakeAnswers.length - 5);
        changeScore(number);
        this.setState({
          indicators: newIndicators,
          buttonIsDisabled: false,
        });
      } else {
        newIndicators[idx] = "red";
        playAudio(errorSound);
        this.setState({ indicators: newIndicators });
      }
    }
  }

  render() {
    const { currentLevel, changeLevel, score, birds } = this.context;
    const { currentBird } = this.state;

    if (currentLevel === 6) {
      return <GameOver score={score} />;
    }
    return (
      <div className="row answer-block">
        <AnswerList
          answers={birds[currentLevel].map((elem) => elem.name)}
          onItemClick={(answer, idx) => {
            this.changeBirdInfo(answer, idx, currentLevel);
          }}
          color={this.state.indicators}
        />
        {currentBird ? <BirdInfo info={this.state.birdInfo} /> : <GameRules />}
        <Button
          onChangeLevel={changeLevel}
          onChangeAnswers={() => this.changeAnswers(currentLevel)}
          disabled={this.state.buttonIsDisabled}
        />
      </div>
    );
  }
}

export default AnswerBlock;
