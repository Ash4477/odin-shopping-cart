import CONSTANTS from "../data/constants";
import styled from "styled-components";
import Navbar from "./Navbar";
import { FlexDiv, ImageHolder, Image, Button } from "./UIComponents";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
`;

const Header = () => {
  return (
    <Container>
      <FlexDiv>
        <ImageHolder>
          <Image src={CONSTANTS.logoImage} />
        </ImageHolder>
        <h2 style={{ fontSize: "1.8rem" }}>SneakShop</h2>
      </FlexDiv>
      <Navbar />
      <FlexDiv $gap="1.5rem">
        <ImageHolder>
          <Image src={CONSTANTS.cartImage} />
        </ImageHolder>
        <ImageHolder>
          <Image src={CONSTANTS.magnifyImage} />
        </ImageHolder>
        <Button>Log In</Button>
      </FlexDiv>
    </Container>
  );
};

export default Header;
