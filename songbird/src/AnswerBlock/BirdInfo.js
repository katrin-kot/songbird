import React from "react";
import AudioPlayer from "react-h5-audio-player";

export function BirdInfo(props) {
  const info = props.info;
  return (
    <div className="col-sm-6 col-12 bird-info">
      <div className="col-12 col-sm-5 bird-img">
        <img src={process.env.PUBLIC_URL + info.birdImg} alt="" />
      </div>
      <div className="col-12 col-sm-7 bird-text">
        <p className="bird-name">{info.name}</p>
        <hr className="solid"></hr>
        <p className="bird-latin">{info.latin}</p>
        <hr className="solid"></hr>
        <AudioPlayer
          src={info.birdVoice}
          layout="horizontal-reverse"
          autoPlay={false}
          autoPlayAfterSrcChange={false}
          showJumpControls={false}
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
      <div className="col-12">
        <p className="col-12 bird-description">{info.birdDescription}</p>
      </div>
    </div>
  );
}
