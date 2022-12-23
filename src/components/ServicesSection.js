import React from "react";
import { motion } from "framer-motion";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "./UseScroll";
//import images
import muzikplayerapp from "../img/muzikplayerapp.png";
import flipflopapp from "../img/flipflopapp.png";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services variants={fade} initial="hidden" animate={controls} ref={element}>
      <AppImgs>
        <h2>
          High <span>perfomance</span>, robust Apps
        </h2>
        <img src={muzikplayerapp} alt="music player app" />
        <img alt="movie search app" src={flipflopapp} />
      </AppImgs>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1300px) {
  }
  @media (max-width: 480px) {
    display: flex;
    align-content: center;
    text-align: center;
    h2 {
      padding-bottom: 1rem;
      font-size: 2rem;
      width: 90%;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    color: #ffa600;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

const AppImgs = styled(motion.div)`
  display: block;

  img {
    width: 90%;
    align-self: center;
  }
  @media (max-width: 480px) {
    align-content: center;
    img {
      width: 100%;
      display: flex;
      align-items: center;
      align-self: center;
    }
  }
`;

export default ServicesSection;
