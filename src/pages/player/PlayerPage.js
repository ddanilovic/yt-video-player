import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "../../components";
import { PlayerContext } from "../../context";
import YouTube from "react-youtube";
import takeIdfromUrl from "../../utils/takeIdfromUrl";

const PlayerPage = () => {
  const { url } = useContext(PlayerContext);

  let navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <React.Fragment>
      <Container>
        <YouTube opts={opts} videoId={url.slice(url.length - 11)} />
      </Container>
      <Button text={"Edit"} clickHandler={clickHandler} />
    </React.Fragment>
  );
};

export default PlayerPage;
