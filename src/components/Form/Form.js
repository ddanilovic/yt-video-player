import React from "react";

const Form = (props) => {
  return (
    <form>
      <input
        type="text"
        placeholder={props.text}
        onChange={(e) => props.formHandler(e)}
      />
    </form>
  );
};

export default Form;
