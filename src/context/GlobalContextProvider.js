import React from "react";
import { PlayerContextProvider } from "./PlayerContext";

const GlobalContextProvider = (props) => {
  return <PlayerContextProvider>{props.children}</PlayerContextProvider>;
};

export default GlobalContextProvider;
