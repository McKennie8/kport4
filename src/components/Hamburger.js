import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Hamburger = () => {
  return (
    <>
      <HamDiv>
        <Burger>
          <h2>Burger1</h2>
        </Burger>
        <Burger>
          <h2>Burger2</h2>
        </Burger>
        <Burger>
          <h2>Burger3</h2>
        </Burger>
      </HamDiv>
    </>
  );
};

const HamDiv = styled(motion.div)`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
`;

const Burger = styled(motion.div)`
  width: 2rem;
  height: 1rem;
  border-radius: 10px;
  background-color: #333136;
  transform-origin: 1px;
  transition: all 0.3s linear;
  color: white;
`;

export default Hamburger;
