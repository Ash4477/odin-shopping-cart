import styled, { keyframes } from "styled-components";
import { FaGithub } from "react-icons/fa";
import CONSTANTS from "../data/constants";

const rotateAnimation = keyframes`
  0% {
    scale: 1;
    transform: rotate(0deg);
  }
  100%{
    scale: 1.5;
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${CONSTANTS.primaryColor};
  color: white;
  padding: 0.8rem;
  margin-top: 2rem;
  transition: all 0.2s ease-in-out;
`;

const StyledA = styled.a`
  &:hover {
    animation: ${rotateAnimation} 1s ease forwards;
  }
`;

const Footer = () => {
  return (
    <Container>
      <p>Copyright © 2024 Ash</p>{" "}
      <StyledA href="https://github.com/Ash4477" target="_blank ">
        <FaGithub style={{ fontSize: "1.3rem" }} />
      </StyledA>
    </Container>
  );
};

export default Footer;
