import React, { useEffect, useState } from "react";
import Kirby from "../img/Kirby.jpg";
//Styled
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
//Styled Components
import styled from "styled-components";
import MenuIcon from "./MenuIcon";

const ContactSection = () => {
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
    <ContactDiv>
      <ContactSmall>
        <StyledTitle>
          <Hide>
            <motion.h2 variants={titleAnim}>Let's make something</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>beautiful</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>together.</motion.h2>
          </Hide>
        </StyledTitle>
        <ContactP variants={fade}>
          Contact me for your web development needs
        </ContactP>
        <ButtonDecor href="mailto:kirby@kirbymartin.com?subject=Friendly Inquiry&body=Hello Kirby,%0D%0A%0D%0AI am interested in learning more about your services.%0D%0A%0D%0ARegards,%0D%0A[Your Name]">
          <ContactButton className="contact-button" variants={fade}>
            Contact Me
            <StyledEnvelope icon={faEnvelope} />
          </ContactButton>
        </ButtonDecor>
      </ContactSmall>

      <Image>
        <motion.img variants={photoAnim} src={Kirby} alt="Kirby" />
      </Image>
    </ContactDiv>
  );
};

//Styled Components
const StyledEnvelope = styled(FontAwesomeIcon)`
  color: white;
  font-size: 36px;
  .contact-button:hover & {
    color: #4e8183;
  }
`;

const ContactButton = styled(motion.button)`
  background-color: #4e8183;
  color: white;
  display: flex;

  flex-direction: column;
  align-items: center;
  width: 20rem;
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  padding: 0rem 0rem;
  border-radius: 30px;
  border-color: #4e8183;
  @media (max-width: 480px) {
    font-size: 1.1rem; /* smaller font size */
    padding: 0.8rem 1.6rem; /* smaller padding */
    width: 14rem;
    display: flex;
    margin: 0 auto;
  }
`;

const ButtonDecor = styled(motion.a)`
  text-decoration: none;
  @media (max-width: 480px) {
    padding: 0rem 0rem;
    margin: 0;
    height: 5rem;
  }
`;

const ContactDiv = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  padding: 5rem 5rem 5rem 20rem;
  color: white;
  z-index: 1;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center; /* Add this property to center the content vertically */
    padding: 1rem 1rem 1rem 1rem;
    color: white;
    z-index: 1;
    margin: 0;
  }
`;

const ContactSmall = styled.div`
  flex: 1;
  min-width: 70vh;
  max-width: 80vh;

  padding-right: 1rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
      border-radius: 30px;
    }
    h2 {
      font-size: 2rem;
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 10vh;
    overflow: hidden;
    padding: 8rem 2rem;
    button {
      margin: 2rem 0rem 5rem 0rem;
      border-radius: 30px;
    }
    h2 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

const ContactP = styled(motion.p)`
  padding: 3rem 0rem;
  font-size: 1.8rem;
  @media (max-width: 480px) {
    font-size: 1.3rem;
    text-align: center;
    display: flex;
  }
`;
const StyledTitle = styled(motion.div)`
  padding: 0rem 0rem;
`;
export default ContactSection;
