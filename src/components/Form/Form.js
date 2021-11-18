import React, { useContext } from "react";

import { PlayerContext } from "../../context";

import playerTime from "../../utils/playerTime";

const Form = (props) => {
  const { setCurrentVideo } = useContext(PlayerContext);

  return (
    <form>
      <input
        type="text"
        placeholder={props.text}
        onChange={(e) =>
          setCurrentVideo({
            url: e.target.value,
            startTime: playerTime.currentTime(),
          })
        }
      />
    </form>
  );
};

export default Form;
