import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

//images
import reactlogo from "../img/reactlogo.png";
import htmllogo from "../img/htmllogo.png";
import csslogo from "../img/csslogo.png";
import liquidlogo from "../img/liquidlogo.png";
import shopifylogo from "../img/shopifylogo.png";
import restlogo2 from "../img/restlogo2.png";

import npmlogo2 from "../img/npmlogo2.png";
import sasslogo from "../img/sasslogo.png";
import reduxlogo from "../img/reduxlogo.jpeg";
import StyledComponents from "../img/StyledComponents.png";
import framermotionlogo from "../img/framermotionlogo.png";
import githublogo from "../img/githublogo.png";
import jsonlogo from "../img/jsonlogo.png";
import javascriptlogo from "../img/javascriptlogo.png";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const images = [
  { src: reactlogo, text: "ReactJS" },
  { src: javascriptlogo, text: "ES5/ES6" },
  { src: restlogo2, text: "REST" },
  { src: liquidlogo, text: "Liquid" },
  { src: shopifylogo, text: "Shopify" },
  { src: htmllogo, text: "HTML" },
  { src: csslogo, text: "CSS" },
  { src: framermotionlogo, text: "Framer Motion" },
  { src: StyledComponents, text: "Styled Components" },
  { src: npmlogo2, text: "NPM" },
  { src: reduxlogo, text: "Redux" },
  { src: githublogo, text: "Github" },
];

const Variants = () => (
  <StyledContainer
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {images.map(({ src, text }) => (
      <StyledItem key={src} className="item" variants={item}>
        <StyledImage src={src} alt="image" />
        <StyledText>{text}</StyledText>
      </StyledItem>
    ))}
  </StyledContainer>
);

const StyledContainer = styled(motion.ul)`
  width: 80vh;

  height: 700px;
  display: grid;
  overflow: hidden;
  margin: 0;
  margin-top: -20px;
  list-style: none;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 30px;
  padding: 35px;

  text-align: center;
  border-radius: 50px;
  @media (max-width: 480px) {
    width: 60vh;
    height: 50vh;
    grid-template-columns: repeat(3, 0.25fr);
    grid-template-rows: repeat(6, 0.25fr);
    padding: 1rem;
    gap: 10px;
    text-align: center;
  }
`;
const StyledItem = styled(motion.li)`
  background: white;
  width: 10vh;
  height: 10vh;
  border-radius: 100%;
  @media (max-width: 480px) {
    width: 5vh;
    height: 5vh;
  }
`;

const StyledText = styled(motion.div)`
  font-size: 20px;
  color: #ffba66;
  @media (max-width: 480px) {
    display: none;
  }
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

export default Variants;
