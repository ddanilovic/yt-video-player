import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../../context";

import { Container, Form, Button } from "../../components/index";

const HomePage = () => {
  let navigate = useNavigate();
  const { addUrl } = useContext(PlayerContext);

  const clickHandler = () => {
    addUrl();
    navigate("/player");
  };
  return (
    <React.Fragment>
      <Container>
        <Form text={"Youtube Video URL"} />
      </Container>
      <Button text={"Save"} clickHandler={clickHandler} />
    </React.Fragment>
  );
};

export default HomePage;
