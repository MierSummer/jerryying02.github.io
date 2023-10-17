import React, { useState, useEffect } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width and set isMobile accordingly
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    // Return null to hide the sidebar on mobile devices
    return null;
  }

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-0 right-0 h-screen p-4 flex flex-col items-center justify-center bg-gray-900/50 text-white"
    >
      {/* Your sidebar content */}
      <motion.a
        href="https://www.linkedin.com/in/jerry-chng001/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -10 }}
        whileTap={{ scale: 0.9 }}
        className="text-3xl mb-4"
      >
        <AiFillLinkedin />
      </motion.a>
      <motion.a
        href="https://github.com/JERRYYING02"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -10 }}
        whileTap={{ scale: 0.9 }}
        className="text-3xl mb-4"
      >
        <AiFillGithub />
      </motion.a>
      <motion.a
        href="https://drive.google.com/file/d/1crABGpOfK5dzhpcqZ_Z_gdCwvOLHj8wu/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -10 }}
        whileTap={{ scale: 0.9 }}
        className="text-3xl"
      >
        <FiFileText />
      </motion.a>
    </motion.div>
  );
};

export default Sidebar;
