import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import MenuIcon2 from "./MenuIcon2";

const Nav3 = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  console.log("burger toggle");

  return (
    <NavDiv hamburgerOpen={hamburgerOpen}>
      <MenuDiv>
        <ul>
          <li>About Me</li>
          <li>My Work</li>
          <li>Contact</li>
        </ul>
      </MenuDiv>
      <MenuIcon2 onClick={() => setHamburgerOpen(!hamburgerOpen)} />
    </NavDiv>
  );
};

// const MenuDiv = styled(motion.div)`
//   display: none;
//   z-index: 6;

//   @media (max-width: 480px) {
//     display: fixed;
//     padding-top: 5rem;
//     padding-left: 5rem;
//     z-index: 10;
//     background-color: aliceblue;
//   }
// `;

const MenuDiv = styled.div`
  height: 100%;
  min-width: 0;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  font-size: 6vh;
  background-color: #4e8183;
  padding: 0rem 0rem;

  background-size: cover;
`;

const NavDiv = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;

  color: white;
  z-index: 10;

  ul {
    display: ${function ({ hamburgerOpen }) {
      return hamburgerOpen ? "inline" : "none";
    }};
    flex-wrap: wrap;
    float: right;
    margin: 4rem 0rem;
    padding: 0rem 10rem;
    color: white;
  }
  ul li {
    list-style-type: none;
    padding-right: 2rem;
    color: white;
  }
  @media (min-width: 601px) {
    display: none;
  }
`;
export default Nav3;
