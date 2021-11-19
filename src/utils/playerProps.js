const duration = {};
class playerProps {
  videoOnReady = (event) => {
    duration["key"] = event.target.getDuration();
  };
  opts = (time) => {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
        start: time,
      },
    };
    return opts;
  };
}

export default new playerProps();
