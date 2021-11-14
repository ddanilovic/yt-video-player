import React, { useContext } from "react";

import { PlayerContext } from "../../context";

const Form = (props) => {
  const { setUrl } = useContext(PlayerContext);

  return (
    <form>
      <input
        type="text"
        placeholder={props.text}
        onChange={(e) => setUrl(e.target.value)}
      />
    </form>
  );
};

export default Form;
