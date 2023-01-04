import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

//logo
import KMWDlogo2 from "../img/KMWDlogo2.png";

//import components
import MenuIcon from "./MenuIcon";
import MenuIcon2 from "./MenuIcon2";

const Nav2 = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    console.log("Menu is Open!!!!!");
    setMenuOpen(!isMenuOpen);
  };

  return (
    <StyledNav>
      <div className="menu-icon-container">
        <MenuIcon2 onClick={isMenuOpen} handleMenuOpen={handleMenuOpen} />
      </div>
      <h1>
        <a id="kmwdlogo" href="/">
          <img src={KMWDlogo2} alt="Logo" />
        </a>
      </h1>
      <ul className={isMenuOpen ? "open" : "closed"}>
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
    width: 100%;
    height: 50px;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #333136;
    z-index: 99;
    display: flex;

    /* Add style rules for the MenuIcon here */
    .menu-icon-container {
      display: flex;
    }
  }
  /* Add media query to hide the navbar on mobile */
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

    /* Hide the nav links on mobile */
    @media (max-width: 480px) {
      display: none;
    }

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
  /* Add media query to change the layout on mobile */
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

//

const Line = styled(motion.div)`
  width: 0%;
  height: 2px;
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #333136;
  z-index: 10;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
`;

export default Nav2;
