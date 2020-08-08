import React from "react";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {}, isFetching: true, error: null };
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=Botaurus+stellaris",
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
      .then((response) => response.json())
      .then((result) =>
        this.setState({ data: result.recordings[0].file, isFetching: false })
      )
      .catch((e) => {
        console.log(e);
        this.setState({ isFetching: false, error: e });
      });
  }

  render() {
    const { data, isFetching, error } = this.state;

    // if (isFetching) return <div>...Loading</div>;

    // if (error) return <div>{`Error: ${error.message}`}</div>;

    return (
      <div className="audio green-audio-player">
        {/* <div className="loading">
  <div className="spinner"></div>
</div> */}
        <div className="play-pause-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="24"
            viewBox="0 0 18 24"
          >
            <path
              fill="#ffffff"
              fillRule="evenodd"
              d="M18 12L0 24V0"
              className="play-pause-icon"
              id="playPause"
            />
          </svg>
        </div>

        <div className="controls">
          <span className="current-time">0:00</span>
          <div className="slider" data-direction="horizontal">
            <div className="progress">
              <div className="pin" id="progress-pin" data-method="rewind"></div>
            </div>
          </div>
          <span className="total-time">0:00</span>
        </div>
        <audio crossOrigin="true">
          <source src={data} type="audio"></source>
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;
