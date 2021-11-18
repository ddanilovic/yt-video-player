import React, { createContext, useState } from "react";
import playerTime from "../utils/playerTime";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [currentVideo, setCurrentVideo] = useState({
    url: "",
    startTime: 0,
  });
  const [videos, setVideos] = useState({});

  const addNewObject = () => {
    if (videos.hasOwnProperty(currentVideo?.url)) {
      // playerTime.checkTime()
    } else {
      videos[currentVideo?.url] = currentVideo?.startTime;
    }
    console.log(videos);
  };

  const addUrl = () => {
    localStorage.removeItem("currentVideo");
    localStorage.setItem("currentVideo", JSON.stringify(currentVideo));
  };

  const providerValue = {
    addUrl,
    setCurrentVideo,
    currentVideo,
    addNewObject,
  };

  return (
    <PlayerContext.Provider value={providerValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider, PlayerContext };
