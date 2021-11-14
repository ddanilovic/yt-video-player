import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "../../components";
import { PlayerContext } from "../../context";

const PlayerPage = () => {
  const { url } = useContext(PlayerContext);

  let navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };

  return (
    <React.Fragment>
      <Container>
        <h1>Video</h1>
      </Container>
      <Button text={"Edit"} clickHandler={clickHandler} />
    </React.Fragment>
  );
};

export default PlayerPage;
