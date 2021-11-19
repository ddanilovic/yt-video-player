class playerProps {
  opts = (time) => {
    const opts = {
      width: "100%",
      playerVars: {
        autoplay: 1,
        start: time,
      },
    };
    return opts;
  };
}

export default new playerProps();
