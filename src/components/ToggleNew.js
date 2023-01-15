import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const ToggleNew = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleDivNew
      layout
      className="question"
      onClick={() => setToggle(!toggle)}
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </ToggleDivNew>
  );
};

const ToggleDivNew = styled(motion.div)`
  font-size: 2rem;
  padding: 3rem 0rem;
  cursor: pointer;
  z-index: 10;
  background-color: #fcf800;
  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 1rem 0rem;
    cursor: pointer;
  }
`;

export default ToggleNew;
