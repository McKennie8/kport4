import React, { useEffect, useState } from "react";
import styled from "styled-components";

//Images
import MenuIcon from "../components/MenuIcon";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
  swoopAdoop,
} from "../animation";
//import movies
import MoviesApp from "../img/MoviesApp.mp4";
import MusicPlayerApp2 from "../img/MusicPlayerApp2.mp4";

import ScrollTop from "../components/ScrollTop";
import { useScroll } from "../components/UseScroll";

const OurWork = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
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
    <Work
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#282727" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>Searchable Movies App</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <video
            variants={photoAnim}
            src={MoviesApp}
            alt="movie app"
            controls
          />
        </Hide>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Music Player App</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <video
            variants={photoAnim}
            src={MusicPlayerApp2}
            alt="music player app"
            controls
          />
        </Hide>
      </Movie>

      <ScrollTop />
      {isMobile && <MenuIcon />}
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 5rem;
    color: #4e8183;
  }
  @media (max-width: 480px) {
    min-height: 100vh;
    overflow: hidden;
    padding: 8rem 2rem;

    h2 {
      padding: 1rem 2rem;
      color: #4e8183;
      font-size: 2.1rem;
    }
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #4e8183;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    padding-bottom: 2rem;
  }
  .line {
    height: 0.5rem;
    background: #4e8183;
    margin-bottom: 1.5rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
  @media (max-width: 480px) {
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #023059;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #4e8183;
`;

const Frame3 = styled(Frame1)`
  background: #023059;
`;

const Frame4 = styled(Frame1)`
  background: #4e8183;
`;

export default OurWork;
