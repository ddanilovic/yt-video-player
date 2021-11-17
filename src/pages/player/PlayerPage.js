import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../../context";

import YouTube from "react-youtube";

import { Container, Button } from "../../components";

import playerProps from "../../utils/playerProps";
import playerTime from "../../utils/playerTime";

const PlayerPage = () => {
  const { url } = useContext(PlayerContext);

  let navigate = useNavigate();

  const videoId = url.slice(url.length - 11);

  return (
    <React.Fragment>
      <Container>
        <YouTube
          opts={playerProps.opts()}
          videoId={videoId}
          onStateChange={playerProps.videoStateChange}
        />
      </Container>
      <Button text={"Edit"} clickHandler={() => navigate("/")} />
      <Button text={"GIF"} clickHandler={() => navigate("/gif")} />
    </React.Fragment>
  );
};

export default PlayerPage;
