import React from "react";
import Header from "./Header";
import Main from "./Main";
import { StoreContext } from "./StoreContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 0,
      score: 0,
      currentBird: "",
      rightAnswer: "",
      imgUrl: "/assets/default-bird.png",
      birdName: "*****",
      voice: "",
      birds: null,
      isFetching: true,
      error: null,
    };
    this.changeLevel = this.changeLevel.bind(this);

    this.player = React.createRef();
  }

  componentDidMount() {
    const idx = Math.round(Math.random() * 5);
    fetch("https://birdsdescription.herokuapp.com/levels")
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          currentBird: result[0][idx].species,
          rightAnswer: result[0][idx].name,
          voice: result[0][idx].audio,
          birds: result,
          isFetching: false,
        })
      )
      .catch((error) => {
        console.log(error);
        this.setState({ birds: {}, isFetching: false, error });
      });
  }

  changeImage = (url) => {
    this.setState({
      imgUrl: url,
    });
  };

  changeName = (answer) => {
    this.setState({
      birdName: answer,
    });
  };

  changeScore = (number) => {
    const currentScore = this.state.score;
    this.setState({
      score: currentScore + number,
    });
  };

  changeLevel = () => {
    const nextLevel = this.state.currentLevel + 1;
    const idx = Math.round(Math.random() * 5);
    const { birds } = this.state;
    if (nextLevel < 6) {
      this.setState({
        currentLevel: nextLevel,
        currentBird: birds[nextLevel][idx].species,
        rightAnswer: birds[nextLevel][idx].name,
        imgUrl: "/assets/default-bird.png",
        birdName: "*****",
        voice: birds[nextLevel][idx].audio,
      });
    } else {
      this.setState({
        currentLevel: nextLevel,
      });
    }
  };

  restoreInitialState = () => {
    const idx = Math.round(Math.random() * 5);
    const { birds } = this.state;
    this.setState({
      currentLevel: 0,
      score: 0,
      currentBird: birds[0][idx].species,
      rightAnswer: birds[0][idx].name,
      imgUrl: "/assets/default-bird.png",
      birdName: "*****",
      voice: birds[0][idx].audio,
    });
  };

  render() {
    console.log(this.state.rightAnswer);
    const { isFetching, error } = this.state;
    if (isFetching) return <div>...Loading</div>;
    if (error) return <div>{`Error: ${error.message}`}</div>;
    return (
      <React.Fragment>
        <Header level={this.state.currentLevel} score={this.state.score} />
        <StoreContext.Provider
          value={{
            ...this.state,
            changeLevel: this.changeLevel,
            changeImage: this.changeImage,
            changeName: this.changeName,
            changeScore: this.changeScore,
            restoreInitialState: this.restoreInitialState,
            player: this.player,
          }}
        >
          <Main />
        </StoreContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
