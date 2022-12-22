import React from "react";

//Styled
import { About, Hide, Description, HideTitle } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";

import Variants from "./Variants";

//Fontawesome

//Styled Components
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Hi,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I'm <span>Kirby</span>
            </motion.h2>
          </Hide>
          <HideTitle>
            <motion.h5 variants={titleAnim}>Front End Developer </motion.h5>
          </HideTitle>
        </motion.div>

        <motion.p variants={fade}></motion.p>
      </Description>
      {/* <Hide>
        <motion.h3 variants={titleAnim}>
          <HoverLetters />
        </motion.h3>
      </Hide> */}
      <Variants />
    </About>
  );
};

//Styled Components
const Hover = styled(motion.div)`
  text-align: center;
  cursor: pointer;
  font-size: 3rem;
`;
const Hide2 = styled(motion.div)`
  padding-top: 10rem;
`;

export default AboutSection;
