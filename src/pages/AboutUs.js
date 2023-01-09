import React from "react";
//Page Components

import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import AboutSecMobile from "../components/AboutSecMobile";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSecMobile />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
