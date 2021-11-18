import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../../context";

import YouTube from "react-youtube";

import { Container, Button } from "../../components";

import playerProps from "../../utils/playerProps";
import playerTime from "../../utils/playerTime";

const PlayerPage = () => {
  const { url, currentVideo, setCurrentVideo } = useContext(PlayerContext);

  let navigate = useNavigate();
  const localData = JSON.parse(localStorage.getItem("currentVideo"));
  const playTime = playerTime.checkTime(currentVideo?.startTime);
  const stringTime = playTime?.toString();
  console.log(stringTime);

  useEffect(() => {
    if (currentVideo.url === "") setCurrentVideo(localData);
    console.log("get local and set state", currentVideo);
    console.log(playTime);
  }, [currentVideo.url]);

  return (
    <React.Fragment>
      <Container>
        <YouTube
          opts={playerProps.opts(stringTime)}
          videoId={currentVideo?.url.slice(currentVideo?.url.length - 11)}
          onStateChange={playerProps.videoStateChange}
          onReady={playerProps.onReady}
        />
      </Container>
      <Button text={"Edit"} clickHandler={() => navigate("/")} />
      <Button text={"GIF"} clickHandler={() => navigate("/gif")} />
    </React.Fragment>
  );
};

export default PlayerPage;
