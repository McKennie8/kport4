import React from "react";

//Styled

//Framer Motion
import { motion } from "framer-motion";

import Wave from "./Wave";

//Fontawesome

//Styled Components
import styled from "styled-components";

const HoverLetters = () => {
  const skills = "ReactJS";
  return (
    <HoverRight>
      {skills.split("").map((letter, index) => (
        <TestDiv
          style={{ zIndex: 1, display: "inline-block" }}
          whileHover={{ y: -5, scale: 1.3 }}
          key={index}
        >
          {letter}
        </TestDiv>
      ))}
    </HoverRight>
  );
};

//Styled Components
const HoverRight = styled(motion.div)`
  display: flex;

  justify-content: flex-end;
  text-align: right;
  cursor: pointer;
  font-size: 3rem;
`;
const TestDiv = styled(motion.div)`
  text-align: right;

  cursor: pointer;
  font-size: 3rem;
`;
export default HoverLetters;
