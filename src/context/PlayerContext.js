import React, { createContext, useState } from "react";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [url, setUrl] = useState("");

  const providerValue = {
    url,
    setUrl,
  };

  return (
    <PlayerContext.Provider value={providerValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider, PlayerContext };
