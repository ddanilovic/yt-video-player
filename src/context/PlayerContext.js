import React, { createContext, useState } from "react";

import playerTime from "../utils/playerTime";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [currentVideo, setCurrentVideo] = useState({
    url: "",
    startTime: 0,
  });

  const addStartTime = (inputText, successCallback, errorCallback) => {
    if (inputText !== "") {
      const videoObj = {
        url: inputText,
        startTime: playerTime.currentTime(),
      };

      setCurrentVideo(videoObj);
      setLocalData(videoObj);
      successCallback();

      return;
    }
    errorCallback();
  };

  const setLocalData = (videoObj) => {
    localStorage.setItem("currentVideo", JSON.stringify(videoObj));
  };

  const providerValue = {
    addStartTime,
    setCurrentVideo,
    currentVideo,
  };

  return (
    <PlayerContext.Provider value={providerValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider, PlayerContext };
