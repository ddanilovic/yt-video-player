class playerProps {
  videoOnReady = (event) => {
    // event.target.playVideoAt(10);
    event.target.seekTo("50");
    console.log(event.target);
  };
  videoOnPlay = (event) => {
    console.log(event.target.getCurrentTime());
  };

  videoStateChange = (event) => {
    // console.log(event.data); // 0 ended, 1 playing, 2 paused
    console.log(event.target.getPlayerState());
    console.log(event.target.getCurrentTime());
    return event.target.getCurrentTime();
  };

  onReady = (event) => {
    console.log("onReady");
    event.target.seekTo(50);

    // event.target.start("50");
  };

  opts = (time) => {
    console.log("time", time);
    const timePlaceholder = time ? time : 0;

    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
        start: "60",
      },
    };
    return opts;
  };
}

export default new playerProps();
