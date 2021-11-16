import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../../context";

import YouTube from "react-youtube";

import { Container, Button } from "../../components";

import playerProps from "../../utils/playerProps";
import playerTime from "../../utils/playerTime";

const PlayerPage = () => {
  const { url } = useContext(PlayerContext);
  const videoId = url.slice(url.length - 11);

  let navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  useEffect(() => {
    const currentTime = new Date().getTime();

    playerTime.setTime(videoId, 0, currentTime);
  }, []);

  return (
    <React.Fragment>
      <Container>
        <YouTube
          opts={playerProps.opts()}
          videoId={videoId}
          onStateChange={playerProps.videoStateChange}
        />
      </Container>
      <Button text={"Edit"} clickHandler={clickHandler} />
    </React.Fragment>
  );
};

export default PlayerPage;
