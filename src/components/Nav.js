import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import KMWDlogo1 from "../img/KMWDlogo1.png";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="kmwdlogo" to="/">
          <img src={KMWDlogo1} alt="Logo" />
        </Link>
      </h1>
      <ul>
        <li>
          <div style={{ position: "relative" }}>
            <Link to="/" className="navtabs">
              About Me
            </Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "80%" : "0%" }}
            />
          </div>
        </li>
        <li>
          <div style={{ position: "relative" }}>
            <Link to="/work" className="navtabs">
              My Work
            </Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/work" ? "80%" : "0%" }}
            />
          </div>
        </li>
        <li>
          <div style={{ position: "relative" }}>
            <Link to="/contact" className="navtabs">
              Contact Me
            </Link>
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
  background: #68577c;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;

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
    color: #ffba66;
    text-decoration: none;
    display: block;
  }

  #logo {
    font-size: 2rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  .navtabs {
    font-size: 1.5rem;
    display: flex;
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

export default Nav;
