import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
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
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

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
      <Movie
        ref={element2}
        variants={swoopAdoop}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
      <ScrollTop />
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
`;

const Hide = styled.div`
  overflow: hidden;
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
