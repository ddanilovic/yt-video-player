import React from "react";

const Button = (props) => {
  const { text, color, clickHandler } = props;

  return (
    <React.Fragment>
      <button
        type="button"
        className={`button button__${color}`}
        onClick={clickHandler}
      >
        {text}
      </button>
    </React.Fragment>
  );
};

export default Button;
