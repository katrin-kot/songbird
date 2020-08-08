import React from "react";
import AudioPlayer from "./AudioPlayer";

function AnswerList(props) {
  const { answers, onItemClick } = props;
  const answerItems = answers.map((answer, idx) => (
    <li
      
      onClick={() => onItemClick(answer)}
      key={idx}
      className="list-group-item list-group-item-action active"
    >
      <div className="indicator"></div>
      {answer}
    </li>
  ));
  return <div className="col-6 list-group">{answerItems}</div>;
}

function BirdInfo(props) {
  const info = props.info;
  return (
    <div className="row col-6 bird-info">
      <div className="col-5 bird-img">
        <img src={process.env.PUBLIC_URL + info.birdImg} />
      </div>
      <div className="col-7 bird-text">
        <p className="bird-name">{info.name}</p>
        <hr className="solid"></hr>
        <p className="bird-latin">{info.latin}</p>
        <hr className="solid"></hr>
      </div>
      <div className="row col-12">
        <div className="col-12">
          <AudioPlayer />
        </div>
      </div>
      <p className="col-12 bird-description">{info.birdDescription}</p>
    </div>
  );
}

class AnswerBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: ["Ворон", "Журавль", "Ласточка", "Козодой", "Кукушка", "Синица"],
      birdInfo: {
        birdImg:
          "https://ichef.bbci.co.uk/news/1024/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg",
        name: "Ворон",
        latin: "Corvus corax",
        birdVoice: "",
        birdDescription:
          "Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.",
      },
      currentBird: "",
    };
  }

  render() {
    return (
      <div className="row answer-block">
        <AnswerList
          answers={this.state.answers}
          onItemClick={(answer) => {
            console.log(answer);
            this.setState({ currentBird: answer });
          }}
        />
        <BirdInfo info={this.state.birdInfo} />
      </div>
    );
  }
}

export default AnswerBlock;
