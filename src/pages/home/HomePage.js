import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../../context";

import { Container, Form, Button } from "../../components/index";

const HomePage = () => {
  const [inputText, setInputText] = useState("");
  const { addStartTime } = useContext(PlayerContext);

  let navigate = useNavigate();

  const formHandler = (e) => {
    setInputText(e.target.value);
  };

  const clickHandler = () => {
    addStartTime(inputText, successCallback, errorCallback);
  };

  const successCallback = () => {
    navigate("/player");
  };

  const errorCallback = () => {
    alert("please fill in the input field");
  };

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Container>
        <Form text={"Youtube Video URL"} formHandler={formHandler} />
      </Container>
      <Button text={"Save"} clickHandler={clickHandler} />
    </React.Fragment>
  );
};

export default HomePage;
