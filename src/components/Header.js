import React from "react";
import styled from "styled-components";
import MenuIcon from "./MenuIcon"; // import your MenuIcon component
import { motion } from "framer-motion";

const FixedHeader = () => {
  return (
    <Header>
      <MenuIcon />
    </Header>
  );
};

const Header = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 99;
`;

export default FixedHeader;
