import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

//logo
import KMWDlogo2 from "../img/KMWDlogo2.png";

//import components

const MobileMenuComp = () => {
  const location = useLocation(); // get the current location object
  const { pathname } = location; // destructuring to get the pathname
  return (
    <StyledNav>
      <h1>
        <a id="kmwdlogo" href="/">
          <img src={KMWDlogo2} alt="Logo" />
        </a>
      </h1>
      <ul>
        <li>
          <div style={{ position: "relative" }}>
            <a href="/" className="navtabs">
              About Me
            </a>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "80%" : "0%" }}
            />
          </div>
        </li>
        <li>
          <div style={{ position: "relative" }}>
            <a href="/work" className="navtabs">
              My Work
            </a>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/work" ? "80%" : "0%" }}
            />
          </div>
        </li>
        <li>
          <div style={{ position: "relative" }}>
            <a href="/contact" className="navtabs">
              Contact Me
            </a>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "80%" : "0%" }}
            />
          </div>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 10vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;
  background: #333136;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  @media (max-width: 480px) {
    display: none;
  }

  ul {
    text-align: center;
    list-style: none;
    padding: 0;
    position: absolute;
    top: 30vh;
    left: 1rem;

    li {
      text-align: center;
      padding: 1rem 0rem;
    }
  }

  z-index: 10;
  #kmwdlogo img {
    height: 10rem;
    padding: 0rem 0rem;
  }
  a {
    color: #c8c8c8;
    text-decoration: none;
    display: block;
  }

  #logo {
    font-size: 2rem;

    font-weight: lighter;
  }
  .navtabs {
    font-size: 1.25rem;
    display: flex;
    font-family: "Poppins";
    font-weight: 100;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 0rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      padding: 0rem;
      justify-content: space-around;
      width: 100%;
      text-decoration: none;
      background-color: white;
      li {
        padding: 0;
        background-color: white;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #4e8183;
  width: 0%;
  position: absolute;
  bottom: -50%;
  left: 0%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default MobileMenuComp;
