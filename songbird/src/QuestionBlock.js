import React from "react";
import { StoreContext } from "./StoreContext";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

class QuestionBlock extends React.Component {
  static contextType = StoreContext;

  render() {
    const { imgUrl, birdName, voice, player, isFetching, error } = this.context;
    if (isFetching) return <div>...Loading</div>;
    if (error) return <div>{`Error: ${error.message}`}</div>;
    return (
      <div className="row question-block">
        <div className="col-12 col-md-3 bird-img">
          <img src={process.env.PUBLIC_URL + imgUrl} alt="" />
        </div>
        <div className="col-12 col-md-9 player-block">
          <p className="bird-name">{birdName}</p>
          <hr className="solid"></hr>
          <AudioPlayer
            src={voice}
            ref={player}
            autoPlayAfterSrcChange={false}
            layout="horizontal-reverse"
            showJumpControls={false}
            customProgressBarSection={[
              RHAP_UI.CURRENT_TIME,
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.DURATION,
              RHAP_UI.VOLUME,
            ]}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            customIcons={{
              play: (
                <img src="/assets/icons8-circled-play-40.png" alt="play-btn" />
              ),
              pause: (
                <img src="/assets/icons8-pause-button-40.png" alt="pause-btn" />
              ),
            }}
          />
        </div>
      </div>
    );
  }
}

export default QuestionBlock;
