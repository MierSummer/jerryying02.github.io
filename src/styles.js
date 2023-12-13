const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
 
    "@media (max-width: 768px)": {
      heroSubText: "text-[30px] leading-[30px]", // Adjusted font size and line height
      sectionHeadText: "text-[40px] leading-[50px]", // Adjusted font size and line height
      sectionSubText: "text-[16px] leading-[24px]", // Adjusted font size and line height
      sectionSubText2: "text-[18px] leading-[26px]", // Adjusted font size and line height
      // Add more styles as needed for smaller screens
    },
  // Computer Canvas container
  computersCanvasContainer: {
    width: "100%", // Set the width as needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // Media queries for specific screen sizes
  "@media (max-width: 768px)": {
    heroHeadText: "text-[60px] leading-[80px]",
    heroSubText: "text-[26px] leading-[40px]",
    sectionHeadText: "text-[50px]",
    // Add more styles as needed for smaller screens
  },
  // Add more media queries and styles as needed
};

export { styles };
