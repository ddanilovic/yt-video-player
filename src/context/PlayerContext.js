import React, { createContext, useState, useEffect } from "react";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [currentVideo, setCurrentVideo] = useState({
    url: "",
    currentTime: 0,
  });

  const addUrl = () => {
    localStorage.removeItem("currentVideo");
    localStorage.setItem("currentVideo", JSON.stringify(currentVideo));
  };

  const providerValue = {
    addUrl,
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
