const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  sectionSubText2:
    "sm:text-[20px] text-[14px] text-secondary tracking-wider",

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
