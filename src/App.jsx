import styled from "styled-components";
import CONSTANTS from "./data/constants";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${CONSTANTS.secodaryColor};
`;

function App() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </Container>
  );
}

export default App;
