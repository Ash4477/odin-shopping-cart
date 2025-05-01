import styled, { keyframes } from "styled-components";
import CONSTANTS from "../data/constants";
import { Button } from "./UIComponents";
import { FaXmark } from "react-icons/fa6";
import CartItem from "./CartItem";
import { useMemo } from "react";

const slideInAnimation = keyframes`
  to {
    transform: translateX(0);
  }

  from {
    transform: translateX(100%);
  }
`;

const slideOutAnimation = keyframes`
  to {
    transform: translateX(100%);
  }

  from {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  position: absolute;
  right: 0;
  z-index: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  min-width: 30vw;
  min-height: 100vh;
  background-color: ${CONSTANTS.secodaryColor};
  animation: ${(props) =>
      props.$animationState ? slideInAnimation : slideOutAnimation}
    0.3s ease forwards;
`;

const CartList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-bottom: 1px solid #d0d0d0;
  padding-bottom: 2rem;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Cart = ({ isCartOpen, cartItems, exitCart }) => {
  const totalCost = useMemo(() => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * cartItems[i].quantity;
    }
    return total;
  }, [cartItems]);

  return (
    <Container $animationState={isCartOpen}>
      <Button
        style={{ fontWeight: "bold", padding: "0.5rem", alignSelf: "end" }}
        onClick={exitCart}
      >
        <FaXmark />
      </Button>
      <h1 style={{ alignSelf: "center" }}>Cart</h1>
      <CartList>
        {cartItems.map((item, idx) => (
          <CartItem data={item} key={idx} />
        ))}
      </CartList>
      <FlexDiv>
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Total:</p>{" "}
        <p
          style={{
            color: CONSTANTS.primaryColor,
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          ${totalCost}
        </p>
      </FlexDiv>
      <Button style={{ width: "100%" }}>CHECKOUT</Button>
    </Container>
  );
};

export default Cart;
