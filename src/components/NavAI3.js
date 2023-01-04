import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavAI3 = ({ showNav3, toggleNav3 }) => {
  return (
    <NavDiv>
      <ul>
        <li>About Me</li>
        <li>My Work</li>
        <li>Contact</li>
      </ul>
      <MenuIcon onClick={toggleNav3} />
    </NavDiv>
  );
};

const NavDiv = styled(motion.div)`
  width: 100%;
  height: 50vh;
  background-color: #333136;
  color: white;
  display: ${({ showNav3 }) => (showNav3 ? "block" : "none")};
  ul {
    flex-wrap: wrap;
    float: right;
    margin: 4rem 0rem;
    padding: 0rem 3rem;
    color: white;
  }
  ul li {
    list-style-type: none;
    padding-right: 2rem;
    color: white;
  }
`;

const MenuIcon = styled.div`
  min-height: 5vh;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 6vh;
  background-color: #4e8183;
  padding: 0.5rem 1rem;
  display: none;
  @media (max-width: 480px) {
    display: block;
  } ;
`;

export default NavAI3;
