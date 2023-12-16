import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { About, Hide, Description, HideTitle } from "../styles";

import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";
import Variants from "./Variants";

// Styled components for CharismaticText
const CharismaticTextContainer = styled.div`
  opacity: 0;
  animation: flicker 1.5s ease-in-out infinite;
`;

const CharismaticText = styled.h5`
  position: relative;
  color: #4e8183;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }
`;

const flicker = styled.keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const AboutSecMobile2 = () => {
  const [isVisible, setVisible] = useState(false);
  const [isFlickering, setIsFlickering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Delay initial appearance by 2 seconds
    setTimeout(() => setVisible(true), 2000);

    // Start flickering animation after 2.5 seconds (2 + 0.5)
    setTimeout(() => setIsFlickering(true), 2500);

    // Stop flickering after 4 seconds (2 + 1.5)
    setTimeout(() => setIsFlickering(false), 4000);

    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        </motion.div>

        {isVisible && (
          <CharismaticTextContainer isFlickering={isFlickering}>
            <CharismaticText>A charismatic</CharismaticText>
          </CharismaticTextContainer>
        )}

        <HideTitle>
          <motion.h5 variants={titleAnim}>Front End Developer </motion.h5>
        </HideTitle>

        <motion.p variants={fade}></motion.p>
      </Description>

      <Variants />
    </About>
  );
};

export default AboutSecMobile2;
