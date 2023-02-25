import React from "react";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuIcon2 = ({ onClick }) => {
  // add the onClick prop
  return (
    <MenuDiv onClick={onClick}>
      <FontAwesomeIcon icon={faBars} size="lg" aria-hidden="true" />
    </MenuDiv>
  );
};

const MenuDiv = styled.button`
  min-height: 5vh;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  font-size: 6vh;
  background-color: #4e8183;
  padding: 0.5rem 1rem;
  z-index: 1000;

  &:focus {
    background-color: #f5f5f5;
    color: #3c6f71;
  }
  @media (min-width: 601px) {
    display: none;
  }
`;

export default MenuIcon2;
