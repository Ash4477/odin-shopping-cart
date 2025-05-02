import CONSTANTS from "../data/constants";
import styled from "styled-components";
import Navbar from "./Navbar";
import { ImageHolder, Image, Button } from "./UIComponents";
import { useNavigate } from "react-router-dom";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.$gap ? props.$gap : "")};
`;

const CountBubble = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 15px;
  width: 15px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  background-color: ${CONSTANTS.primaryColor};
  color: white;
  border-radius: 50%;
`;

const Header = ({ openCart, cartItemsCount }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <FlexDiv onClick={() => navigate("/")}>
        <ImageHolder>
          <Image src={CONSTANTS.logoImage} />
        </ImageHolder>
        <h2 style={{ fontSize: "1.8rem", cursor: "pointer" }}>SneakShop</h2>
      </FlexDiv>
      <Navbar />
      <FlexDiv $gap="1.5rem">
        <ImageHolder
          onClick={() => openCart(true)}
          style={{ position: "relative" }}
        >
          {cartItemsCount > 0 && <CountBubble>{cartItemsCount}</CountBubble>}
          <Image src={CONSTANTS.cartImage} />
        </ImageHolder>
        <ImageHolder>
          <Image src={CONSTANTS.magnifyImage} />
        </ImageHolder>
        <Button onClick={() => navigate("/login")}>Log In</Button>
      </FlexDiv>
    </Container>
  );
};

export default Header;
