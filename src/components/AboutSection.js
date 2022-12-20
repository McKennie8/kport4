import React from "react";

//Styled
import { About, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";
import Wave from "./Wave";
//Fontawesome

//Styled Components
import styled from "styled-components";

const AboutSection = () => {
  const skills = "ReactJS";
  return (
    <About>
      <div>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Hi,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I'm <span>Kirby</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h3 variants={titleAnim}>Front End Developer </motion.h3>
          </Hide>
        </motion.div>
        <motion.p variants={fade}></motion.p>
      </div>
      <Hover>
        {skills.split("").map((letter, index) => (
          <motion.div
            style={{ zIndex: 1 }}
            whileHover={{ x: 10, scale: 1.3 }}
            key={index}
          >
            {letter}
          </motion.div>
        ))}
      </Hover>
      <Wave />
    </About>
  );
};

//Styled Components
const Hover = styled(motion.div)`
  text-align: center;
  cursor: pointer;
`;

export default AboutSection;
