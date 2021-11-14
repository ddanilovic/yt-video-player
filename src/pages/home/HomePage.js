import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, Button } from "../../components/index";

const HomePage = () => {
  let navigate = useNavigate();

  const clickHandler = () => {
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
