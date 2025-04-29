import styled from "styled-components";
import CONSTANTS from "../data/constants";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${CONSTANTS.tertiaryColor};
  color: ${CONSTANTS.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid ${CONSTANTS.secodaryColor};
  padding: 5rem;
`;

const Error = () => {
  return (
    <Container>
      <Div>
        <h1>Error: 404</h1>
        <h2>This route doesn't exist! :&lt;</h2>
        <Link to="/">Click here to go to home</Link>
      </Div>
    </Container>
  );
};

export default Error;
