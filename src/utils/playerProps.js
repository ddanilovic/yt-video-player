class playerProps {
  videoOnReady = (event) => {
    // event.target.playVideoAt(10);
    event.target.seekTo(50);
    console.log(event.target);
  };
  videoOnPlay = (event) => {
    console.log(event.target.getCurrentTime());
  };

  videoStateChange = (event) => {
    console.log(event.data); // 0 ended, 1 playing, 2 paused
  };

  opts = () => {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return opts;
  };
}

export default new playerProps();
