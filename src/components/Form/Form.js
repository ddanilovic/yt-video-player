import React from "react";

const Form = ({ text, formHandler }) => {
  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        placeholder={text}
        onChange={(e) => formHandler(e)}
      />
    </form>
  );
};

export default Form;
