import styled from "styled-components";
import SneakerCard from "../components/SneakerCard";
import { mainSneakers, otherSneakers } from "../data/sneakers";
import { useState } from "react";
import CONSTANTS from "../data/constants";
import { FaPlus, FaMinus } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3rem;
  transition: all 0.2s ease;
`;

const ShoesList = styled.ul`
  list-style-type: none;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${CONSTANTS.primaryColor};
  margin: 1rem 0;
  font-size: 1.5rem;
  background: transparent;
  border: 0;
`;

const Shop = () => {
  const [showOtherSneaks, setShowOtherSneaks] = useState(false);

  return (
    <Container>
      <h1 style={{ fontSize: "3rem" }}>Our best collection</h1>
      <ShoesList>
        {mainSneakers.map((sneak, idx) => (
          <li key={idx}>
            <SneakerCard data={sneak} />
          </li>
        ))}
        {showOtherSneaks
          ? otherSneakers.map((sneak, idx) => (
              <li key={idx}>
                <SneakerCard data={sneak} />
              </li>
            ))
          : null}
      </ShoesList>
      {showOtherSneaks ? (
        <Button onClick={() => setShowOtherSneaks(false)}>
          See Less <FaMinus />
        </Button>
      ) : (
        <Button onClick={() => setShowOtherSneaks(true)}>
          See more <FaPlus />
        </Button>
      )}
    </Container>
  );
};

export default Shop;
