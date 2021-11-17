import React, { createContext, useState, useEffect } from "react";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [url, setUrl] = useState("");
  const [allUrls, setAllUrls] = useState([]);

  const arrayOfUrls = [];

  const addUrl = () => {
    if (arrayOfUrls.includes(url)) {
      console.log("already added");
    } else {
    }
  };

  useEffect(() => {
    const localUrls = localStorage.getItem("allUrls");
    if (localUrls) setAllUrls(localUrls);
  }, []);

  const providerValue = {
    url,
    setUrl,
    addUrl,
  };

  return (
    <PlayerContext.Provider value={providerValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider, PlayerContext };
