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
          title="gif"
          src="https://giphy.com/embed/26h0p1JH3a31KcczS"
          width="480"
          height="270"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Container>
      <Button text={"Back"} clickHandler={clickHandler} />
    </React.Fragment>
  );
};

export default GifPage;
