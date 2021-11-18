import React, { useContext } from "react";

import { PlayerContext } from "../../context";

import playerTime from "../../utils/playerTime";

const Form = (props) => {
  const { setCurrentVideo } = useContext(PlayerContext);

  const formHandler = (e) => {
    setCurrentVideo({
      url: e.target.value,
      startTime: playerTime.currentTime(),
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder={props.text}
        onChange={(e) => formHandler(e)}
      />
    </form>
  );
};

export default Form;
