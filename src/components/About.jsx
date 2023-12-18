import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full' >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[4px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-4 px-2 min-h-[240px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
     <div className='flex flex-col'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me?</p>
        
        <h2 className={styles.sectionHeadText}>Not just an ordinary coder.</h2>


      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in building full-stack applications 
        . I'm a avid learner and likes to collaborate with clients to
        create efficient solutions that solve real-world problems. 
        
      </motion.p>

      <div className='flex flex-col items-center mt-7 mb-5'>
          <a href='https://drive.google.com/file/d/1dvaVAVPyD90aEvNti5AWr354K4gqDkwR/view?usp=drive_link' download>
          <button class="bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="fill-current w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>My Resume</span>
          </button>
          </a>
          <p className='text-white mt-2 text-sm'>Click to view resume</p>
        </div>
      </div>
    
      <div className='mt-4 ml-4 flex flex-wrap gap-4'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    
    </>
  );
};

export default SectionWrapper(About, "about");
