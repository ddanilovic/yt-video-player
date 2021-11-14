import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "../../components";

const GifPage = () => {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate("/player");
  };
  return (
    <React.Fragment>
      <Container>
        <iframe
          src="https://giphy.com/embed/3oEjHH571DqgK1YNMI"
          width="480"
          height="270"
          frameBorder="0"
          className="gif"
          allowFullScreen
          title="gif"
        ></iframe>
      </Container>
      <Button text={"Back"} clickHandler={clickHandler} />
    </React.Fragment>
  );
};

export default GifPage;
