import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";

import { Container, Button } from "../../components";

import playerProps from "../../utils/playerProps";
import playerTime from "../../utils/playerTime";

import { PlayerContext } from "../../context";

const PlayerPage = () => {
  const { currentVideo, setCurrentVideo } = useContext(PlayerContext);

  let navigate = useNavigate();

  const localData = JSON.parse(localStorage.getItem("currentVideo"));

  const playTime = playerTime.checkTime(currentVideo?.startTime).toString();

  useEffect(() => {
    if (!currentVideo.url) setCurrentVideo(localData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVideo.url]);

  return (
    <React.Fragment>
      <Container>
        <YouTube
          opts={playerProps.opts(playTime)}
          videoId={playerTime.videoId(currentVideo)}
        />
      </Container>
      <Button text={"Edit"} clickHandler={() => navigate("/")} />
      <Button
        text={"GIF"}
        color={"pink"}
        clickHandler={() => navigate("/gif")}
      />
    </React.Fragment>
  );
};

export default PlayerPage;
