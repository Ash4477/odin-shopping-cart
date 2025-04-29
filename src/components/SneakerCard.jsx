import styled from "styled-components";
import CONSTANTS from "../data/constants";
import { Image, ImageHolder } from "./UIComponents";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  width: 500px;
  border: 2px solid ${CONSTANTS.tertiaryColor};
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 0 ${CONSTANTS.primaryColor};
  transition: all 0.2s ease;
  user-select: none;

  &:hover {
    transform: translate(-0.5rem, -0.5rem);
    box-shadow: 0.5rem 0.5rem 0 ${CONSTANTS.primaryColor};
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1rem;
  border-top: 2px solid ${CONSTANTS.tertiaryColor};
  font-size: 1.2rem;
  font-weight: bold;
`;

const SneakerCard = ({ data, id }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/product/${id}`)}>
      <ImageHolder $width="100%">
        <Image src={data.image} />
      </ImageHolder>

      <FlexDiv>
        <p>{data.title}</p>
        <p style={{ color: CONSTANTS.primaryColor }}>${data.price}</p>
      </FlexDiv>
    </Container>
  );
};

export default SneakerCard;
