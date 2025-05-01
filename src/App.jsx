import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CONSTANTS from "./data/constants";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${CONSTANTS.secodaryColor};
  opacity: ${(props) => (props.$inactive ? "0.5" : "")};
  pointer-events: ${(props) => (props.$inactive ? "none" : "")};
  filter: ${({ $inactive }) => ($inactive ? "brightness(0.4)" : "none")};
  transition: filter 0.2s ease;
`;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (cartItem) => {
    setCartItems((prevItems) => [...prevItems, cartItem]);
  };

  const exitCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      {isCartOpen && (
        <Cart
          isCartOpen={isCartOpen}
          cartItems={cartItems}
          exitCart={exitCart}
        />
      )}
      <div onClick={isCartOpen === true ? exitCart : null}>
        <Container $inactive={isCartOpen}>
          <Header openCart={setIsCartOpen} />
          <Outlet context={{ addToCart }} />
          <Footer />
          <ToastContainer />
        </Container>
      </div>
    </>
  );
}

export default App;
