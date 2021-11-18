import React, { createContext, useState, useEffect } from "react";

import playerTime from "../utils/playerTime";

import localStorageService from "../utils/localStorageService";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [url, setUrl] = useState("");
  const [currentVideo, setCurrentVideo] = useState("");

  const [allUrls, setAllUrls] = useState([]);

  //kada korisnik refreshuje stranicu kako logika zna koji objekat/url je bio od celog array-a objekata? Onda treba poseban storage currentUrl
  //kada korisnik doda setuje se state currentVideo(url) i istoimeni local storage + onda se filtrira local storage u potrazi za istim url-om i uzima se njegov currentTime

  const localData = localStorageService.get();

  const arrayOfUrls = [];

  const addUrl = () => {
    //TODO: Provera da li vec postoji
    localStorage.removeItem("CurrentVideo");

    arrayOfUrls.push({
      startTime: playerTime.currentTime(),
      url: url,
    });
    setAllUrls(arrayOfUrls);
  };

  useEffect(() => {
    if (allUrls !== localData) {
      console.log("set local from state");
      localStorageService.save(allUrls);
    }
  }, [allUrls]);

  useEffect(() => {
    if (localData) setAllUrls(localData);
    console.log("get local and set state", allUrls);
  }, [allUrls]);

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
