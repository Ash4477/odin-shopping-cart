import styled from "styled-components";
import CONSTANTS from "../data/constants";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.$gap ? props.$gap : "")};
`;

const ImageHolder = styled.div`
  max-width: ${(props) => (props.$width ? props.$width : "8rem")};
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  cursor: pointer;
`;

const Button = styled.button`
  width: max-content;
  font-size: 1.2rem;
  font-weight: 500;
  padding: ${(props) => (props.$padding ? props.$padding : "0.5rem 1rem")};
  color: white;
  background-color: ${CONSTANTS.primaryColor};
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 0 ${CONSTANTS.tertiaryColor};
  transition: all 0.2s ease;
  user-select: none;
  cursor: pointer;

  &:hover {
    transform: translate(-0.5rem, -0.5rem);
    box-shadow: 0.5rem 0.5rem 0 ${CONSTANTS.tertiaryColor};
  }
`;

export { FlexDiv, ImageHolder, Image, Button };
