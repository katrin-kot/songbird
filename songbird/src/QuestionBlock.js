import React from "react";
import AudioPlayer from "./AudioPlayer";

class QuestionBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: "/assets/default-bird.png",
      birdName: "*****",
      api: "b1ae646e2c5aa006a9ed7c9a5f5658d9",
    };
  }

  componentDidMount() {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.api}&tag_mode=all&extras=url_m&format=json&nojsoncallback&tags=Botaurus+stellaris`
    )
      .then((response) => response.json())
      .then((result) =>
        this.setState({ imgUrl:result.photos.photo[0].url_m, isFetching: false })
      )
      .catch((e) => {
        console.log(e);
        this.setState({
          isFetching: false,
          error: e,
        });
      });
  }

  render() {
    return (
      <div className="question-block">
        <div className="question-img">
          <img src={process.env.PUBLIC_URL + this.state.imgUrl} />
        </div>
        <div className="player-block">
        <p className="bird-name">{this.state.birdName}</p>
        <hr className="solid"></hr>
        <AudioPlayer />
      </div>
      </div>
    );
  }
}

export default QuestionBlock;
