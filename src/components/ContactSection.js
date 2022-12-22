import React from "react";
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

const ContactSection = () => {
  return (
    <ContactDiv>
      <ContactSmall>
        <motion.div className="title">
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
        </motion.div>
        <motion.p variants={fade}>
          Contact me for your web development needs
        </motion.p>
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
`;

const ButtonDecor = styled(motion.a)`
  text-decoration: none;
`;

const ContactDiv = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  padding: 5rem 5rem 5rem 20rem;
  color: white;
  z-index: 1;
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
  }
`;
export default ContactSection;
