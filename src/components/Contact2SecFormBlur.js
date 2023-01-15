import emailjs from "@emailjs/browser";
import React, { useRef, useEffect, useState } from "react";
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

const Contact2SecFormBlur = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v5qoh1h",
        "template_9opl92c",
        form.current,
        "k8IEkSrnG3TcVfeWA"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <FormDiv>
          <form>
            <NameEmail>
              <NameInput
                type="text"
                name="from_name"
                placeholder="Name"
                onTouchStart={() => setNameFocused(true)}
                onTouchEnd={() => setNameFocused(false)}
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
              />
              {nameFocused && isMobile && (
                <input autoFocus={true} type="text" placeholder="Name" />
              )}
            </NameEmail>
            <EmailInput
              type="email"
              name="user_email"
              placeholder="Email"
              onTouchStart={() => setEmailFocused(true)}
              onTouchEnd={() => setEmailFocused(false)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            {emailFocused && isMobile && (
              <input autoFocus={true} type="text" placeholder="Email" />
            )}
            <TextArea
              name="message"
              placeholder="Message"
              onTouchStart={() => setMessageFocused(true)}
              onTouchEnd={() => setMessageFocused(false)}
              onFocus={() => setMessageFocused(true)}
              onBlur={() => setMessageFocused(false)}
            />
            {messageFocused && isMobile && (
              <input autoFocus={true} type="text" placeholder="Message" />
            )}
          </form>
        </FormDiv>
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
  padding: 1.5rem 0rem;
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

const FormDiv = styled(motion.div)`
  height: 20vh;
  width: 36vw;

  display: block;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  @media (max-width: 480px) {
    display: inline-block;

    width: 80vw;
    align-content: center;
    align-items: center;
  }
`;

const NameInput = styled.input`
  width: 20rem;
  font-size: 2rem;
  text-decoration: none;
  border-radius: 10px;
  padding: 0.2rem 0.2rem;
  font-family: "Poppins", sans-serif;
  border: none;
  margin: 1rem 0.5rem 1rem 0rem;
  @media (max-width: 480px) {
    margin: 1rem 0rem;
    width: 100%;
  }
`;

const EmailInput = styled.input`
  width: 20rem;
  font-size: 2rem;
  text-decoration: none;
  border-radius: 10px;
  padding: 0.2rem 0.2rem;
  font-family: "Poppins", sans-serif;
  border: none;
  margin: 1rem 0rem 1rem 0.9rem;
  @media (max-width: 480px) {
    margin: 1rem 0rem;
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  font-size: 2rem;
  text-decoration: none;
  border-radius: 10px;
  padding: 0.2rem 0.2rem;
  font-family: "Poppins", sans-serif;
  border: none;
  margin: 1rem 0rem;
`;

const SubmitButton = styled.button`
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
  height: 4rem;
  @media (max-width: 480px) {
    font-size: 1.1rem; /* smaller font size */
    padding: 0.8rem 1.6rem; /* smaller padding */
    width: 14rem;
    display: flex;
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
  }
`;

const NameEmail = styled(motion.div)`
  display: flex;
  @media (max-width: 480px) {
    display: block;
  }
`;

export default Contact2SecFormBlur;
