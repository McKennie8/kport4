import React, { useEffect, useState } from "react";

import { About, Hide, Description, HideTitle } from "../styles";
import MenuIcon from "./MenuIcon";
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";
import Variants from "./Variants";

const AboutSecMobile = () => {
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
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Hi,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I'm <span>Kirby</span>
            </motion.h2>
          </Hide>
          <HideTitle>
            <motion.h5 variants={titleAnim}>Front End Developer </motion.h5>
          </HideTitle>
        </motion.div>

        <motion.p variants={fade}></motion.p>
      </Description>

      {/* <Hide>
        <motion.h3 variants={titleAnim}>
          <HoverLetters />
        </motion.h3>
      </Hide> */}
      <Variants />
    </About>
  );
};

export default AboutSecMobile;
