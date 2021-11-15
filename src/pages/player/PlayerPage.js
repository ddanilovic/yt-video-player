import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../../context";

import YouTube from "react-youtube";

import { Container, Button } from "../../components";
import playerProps from "../../utils/playerProps";

const PlayerPage = () => {
  const { url } = useContext(PlayerContext);

  let navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };

  return (
    <React.Fragment>
      <Container>
        <YouTube
          opts={playerProps.opts()}
          videoId={url.slice(url.length - 11)}
          onStateChange={playerProps.videoStateChange}
        />
      </Container>
      <Button text={"Edit"} clickHandler={clickHandler} />
    </React.Fragment>
  );
};

export default PlayerPage;
