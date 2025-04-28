import { useNavigate } from "react-router-dom";
import { ImageHolder, Image, Button } from "../components/UIComponents";
import styled from "styled-components";
import { mainSneakers } from "../data/sneakers";
import CONSTANTS from "../data/constants";

const Container = styled.div`
  display: flex;
  border: 3px solid black;
  margin: 0 3rem;
  padding: 2rem;
  gap: 1rem;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-top: 2px solid ${CONSTANTS.tertiaryColor};
  font-weight: bold;
`;

const HeroImageDiv = styled.div`
  flex: 1;
  border: 2px solid ${CONSTANTS.tertiaryColor};
  border-radius: 10px;
  box-shadow: 1rem 1rem ${CONSTANTS.primaryColor};
`;

const HeroTextDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Underline = styled.span`
  border-bottom: 4px solid ${CONSTANTS.primaryColor};
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <HeroTextDiv>
        <h1 style={{ fontSize: "2.5rem" }}>
          The most <Underline>beautiful</Underline> and{" "}
          <Underline>high quality</Underline> sneakers in the whole world
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          tempora expedita consectetur tenetur veritatis eligendi. Veritatis
          laboriosam quos cum optio?
        </p>
        <Button $padding="1rem 2rem" onClick={() => navigate("/shop")}>
          Explore Now
        </Button>
      </HeroTextDiv>
      <HeroImageDiv>
        <ImageHolder $width="50rem">
          <Image src={mainSneakers[0].image} />
        </ImageHolder>
        <FlexDiv>
          <p>{mainSneakers[0].title}</p>
          <p style={{ color: CONSTANTS.primaryColor }}>
            ${mainSneakers[0].price}
          </p>
        </FlexDiv>
      </HeroImageDiv>
    </Container>
  );
};

export default Home;
