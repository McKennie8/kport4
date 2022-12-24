import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const MenuIcon = () => {
  // component code goes here
  return (
    <MenuDiv>
      <FontAwesomeIcon icon={faBars} size="lg" aria-hidden="true" />
    </MenuDiv>
  );
};

const MenuDiv = styled.div`
  min-height: 5vh;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 6vh;
  background-color: #4e8183;
  padding: 0.5rem 1rem;
`;

export default MenuIcon;
