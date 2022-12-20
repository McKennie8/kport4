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

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>I work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
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
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={Kirby} alt="Kirby" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components
const StyledEnvelope = styled(FontAwesomeIcon)`
  color: #ffba66;
  font-size: 36px;
  .contact-button:hover & {
    color: white;
  }
`;

const ContactButton = styled(motion.button)`
  background-color: white;
  color: #ffba66;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  padding: 0rem 0rem;
`;

const ButtonDecor = styled(motion.a)`
  text-decoration: none;
`;

export default AboutSection;
