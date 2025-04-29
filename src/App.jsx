import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CONSTANTS from "./data/constants";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${CONSTANTS.secodaryColor};
`;

const Cart = styled.div``;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (cartItem) => {
    setCartItems((prevItems) => [...prevItems, cartItem]);
  };

  return (
    <Container>
      {/* {isCartOpen && <Cart />} */}
      <Header openCart={setIsCartOpen} />
      <Outlet addToCart={addToCart} />
      <Footer />
      <ToastContainer />
    </Container>
  );
}

export default App;
