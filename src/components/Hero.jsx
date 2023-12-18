import React, { useState, useEffect } from "react";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube, AiOutlineArrowDown } from "react-icons/ai";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, StarsCanvas } from "./canvas";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Sidebar from "./Sidebar"; // Import the Sidebar component

import { workvideo1 } from "../assets";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [typedText3, setTypedText3] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const originalText = "                          I develop full-stack , AI and data projects. Final year student @ Goldsmiths, University Of London";
  const originalText2 = "Let me solve your problems";
  const typingSpeed = 20;
  const fadeInDelay = 4000; // Delay in milliseconds before fading in the button

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < originalText.length) {
        setTypedText((prevText) => prevText + originalText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Similar useEffects for typedText2 and typedText3

  const handleResize = () => {
    // Handle any resize-related logic you need here
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const buttonTimeout = setTimeout(() => {
      setButtonVisible(true);
    }, fadeInDelay);

    return () => clearTimeout(buttonTimeout);
  }, []);

  return (

    
    <div className={`relative w-full h-screen mx-auto`}>
      
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-4`}
      >
        
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className='text-white w-[50%]'
        >
          <h2 className={`${styles.heroHeadText}`}>
            Hi I'm <span className='text-[#915EFF]'>Jerry</span>
          </h2>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            {typedText}
          </p>
          
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            {typedText2}
          </p>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            {typedText3}
          </p>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            
          </p>

          {buttonVisible && (
  <motion.a
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    href="#work"
    className="relative inline-block text-lg group mt-5 mb-10">
    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
      <span className="relative">View projects</span>
  
      <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
        
      </span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
  </motion.a>
)}


        </motion.div>
      </div>
     <video
        className="hidden sm:block absolute top right-0 object-cover w-1/3 h-1/4 mt-20 rounded-lg" // Hide on small screens, show on medium and larger screens
        autoPlay
        loop
        muted
      >
        <source src={workvideo1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <Sidebar />
        
    </div>
  );
};

export default SectionWrapper(Hero, "home");
