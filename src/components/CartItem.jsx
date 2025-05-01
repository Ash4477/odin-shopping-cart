import styled from "styled-components";
import { ImageHolder, Image } from "./UIComponents";
import CONSTANTS from "../data/constants";

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

const P = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${({ $color }) => ($color ? $color : "")};
`;

const QuantityDiv = styled.div`
  position: absolute;
  right: 0;
  text-align: center;
  margin: 0 auto;
  z-index: 10;
  width: 15px;
  height: 15px;
  font-size: 10px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #d0d0d0;
  background-color: ${CONSTANTS.secodaryColor};
`;

const CartItem = ({ data }) => {
  return (
    <Container>
      <div
        style={{
          flex: "2",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div style={{ position: "relative" }}>
          <QuantityDiv>{data.quantity}</QuantityDiv>
          <ImageHolder
            $width="70px"
            style={{
              border: `1px solid #d0d0d0`,
              borderRadius: "10px",
              padding: "0.5rem 0.1rem",
            }}
          >
            <Image src={data.image} />
          </ImageHolder>
        </div>
        <P style={{ width: "200px", fontSize: "1rem" }}>{data.title}</P>
      </div>
      <P $color={CONSTANTS.primaryColor}>${data.price}</P>
    </Container>
  );
};

export default CartItem;
