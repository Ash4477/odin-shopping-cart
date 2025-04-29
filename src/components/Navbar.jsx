import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import CONSTANTS from "../data/constants";

const slideLeftToRight = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

const slideRightToLeft = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  font-size: 1.2rem;
  text-decoration: none;
  color: inherit;
  position: relative;
  padding-bottom: 2px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: ${CONSTANTS.primaryColor};
    transition: none;
  }

  &:hover::after {
    animation: ${slideLeftToRight} 0.2s ease-in-out forwards;
  }

  &:not(:hover)::after {
    animation: ${slideRightToLeft} 0.2s ease-in-out forwards;
  }
`;

const Navbar = () => {
  const location = useLocation();
  return (
    <nav>
      <NavList>
        <li>
          <StyledLink to="/" $active={location.pathname === "/"}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/shop"
            $active={
              location.pathname === "/shop" ||
              location.pathname.startsWith("/product")
            }
          >
            Shop
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/contacts"
            $active={location.pathname === "/contacts"}
          >
            Contacts
          </StyledLink>
        </li>
      </NavList>
    </nav>
  );
};

export default Navbar;
