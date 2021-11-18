class playerProps {
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
