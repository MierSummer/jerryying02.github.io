import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  malaysiandeli,
  threejs,
  gptclonewebsite,
  visualizer,
  myblog,
  github,
  plantdcs,
  socialhut,
  portfoliowebsite,
  cryptobot,
  upcoming
} from "../assets";

export const navLinks = [
  {
    id: "home", // Unique ID for the Home link
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  }

 
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Front & Backend  Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Service & Sales Manager",
    company_name: "Yuan Yuan Sheng",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - March 2023",
    points: [
      "Implement and maintain record payments system using loyverse POS.",
      "Integrate food delivery app with restaurant.",
      "Collect and review constructive feedback from customers.",
    ],
  },
  {
    title: "Marketing & Digital IT Assistant",
    company_name: "Crescendo International College",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2023 - August 2023",
    points: [
      "Collaborating with third-party website service provider (First online) to wireframe student management system.",
      "Designed engaging content, including infographics(banner/poster) Adobe Illustrator, and videos, to drive student engagement.",
      "Assisted digital marketing efforts, including SEO, SEM(Google Ads), and social media marketing that increased student intake"
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];


const testimonials = [
  {
    testimonial:
      "Jerry was hardworking and has a good attitude towards his work",
    name: "Aaron",
    designation: "Head Manager",
    company: "Vivo Sdn Bhd",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "He has an artistic sense to create beautiful designs for clients",
    name: "Alicia",
    designation: "Marketing Executive",
    company: "Crescendo International College",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "For the future employer",
    name: "Simon Loh",
    designation: "Dean School Of Computing",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Malaysian Deli",
    description:
      "Self-funded e-commerce buisiness that markets Malaysian food & drinks ingredients, integrated Stripe Payment,sellers seamlessly update their products on sanityCMS",
    tags: [
      {
        name: "Stripe",
        color: "blue-text-gradient",
      },
      {
        name: "sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
    ],
    image: malaysiandeli,
    source_code_link: "https://github.com/JERRYYING02/malaysian-deli-ecommerce",
    eye_link:"https://malaysian-deli-ecommerce.vercel.app/",
  },
  {
    name: "Wripts",
    description:
      "CRUD blogging app extended with summernote WYSIWYG editor with custom search functionalities,Weather & News API",
    tags: [
      {
        name: "nodejs,express",
        color: "blue-text-gradient",
      },
      {
        name: "EJS",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "yellow-text-gradient",
      },
    ],
    image: myblog,
    source_code_link: "https://github.com/JERRYYING02/dnw-gs-mini-project",
    eye_link:"https://mini-project-jerry.onrender.com/",
  },
  {
    name: "Social Hut",
    description:
      "Social media app inspired by TikTok.Involve user suggestions and their authentication by Google OAuth",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs,express",
        color: "green-text-gradient",
      },
      {
        name: "sanity.io",
        color: "pink-text-gradient",
      },
    ],
    image: socialhut,
    source_code_link: "https://github.com/JERRYYING02/socialhut",
    eye_link:"https://socialhut123.vercel.app/",
  },
  {
    name: "QualityFare",
    description:
      "Recipe sharing platform integrated with MealsDB API that allows users to look for recommendations for popular foods. Lead collaboration project with friends from Japan,Italy,Canada,Australia",
    tags: [
      {
        name: "MERN React",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs,express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/JERRYYING02/ASP_team72",
    eye_link:"https://exp2.deylkqii2lnv.amplifyapp.com/",
  },
  {
    name: "3D Portfolio Website",
    description:
      "Dynamic 3D portfolio website using Three.js, showcases understanding and creation in frontend-engaging skills",
    tags: [
      {
        name: "hreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "framerMotion",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfoliowebsite,
    source_code_link: "https://github.com/JERRYYING02/socialhut",
    eye_link:"https://socialhut123.vercel.app/",
  },
  {
    name: "Travel Advisor App",
    description:
      "Offering travel advice and destination information. Developed with Expo for easy cross-platform deployment. Queried on RapidAPI and Google Map API",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "yellow-text-gradient",
      },
    ],
    image: upcoming,
    source_code_link: "https://github.com/JERRYYING02/ASP_team72",
    eye_link:"https://exp2.deylkqii2lnv.amplifyapp.com/",
  },
  {
    name: "Movie Data Analysis",
    description:
      "Exploring sentiment of movie plot by webscrapping Wikipedia data, compare demographics (budget,genre,box office revenues)",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "regex",
        color: "green-text-gradient",
      },
      {
        name: "beautifulSoup",
        color: "pink-text-gradient",
      },
      {
        name: "beautifulSoup",
        color: "yellow-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://github.com/JERRYYING02/Movie-Data-Analysis",
    eye_link:"https://colab.research.google.com/drive/1mJKSTyUOs9hJFh0CkYSoXe1-aGw9_Yyh",
  },
  {
    name: "CryptoCurrency Bot ",
    description:
      "C++ bot that uses simple moving average to predict the price of cryptocurrency from csv data",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "simpleMovingAverage",
        color: "green-text-gradient",
      },
    ],
    image: cryptobot,
    source_code_link: "https://github.com/JERRYYING02/CryptoBot",
    eye_link:"https://github.com/JERRYYING02/CryptoBot",
  },
  {
    name: "Pixel mini-game ",
    description:
      "Mario like mini-game built with p5.js,involve using constructors and classes in javascript",
    tags: [
      {
        name: "p5.js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "myfirstproject",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/JERRYYING02/Pixelminigame",
    eye_link:"https://jerryying02.github.io/PixelMiniGame/",
  },
  
  {
    name: "GPT Clone Website",
    description:
      "A GPT clone website with openAI API codex integration,forked",
    tags: [
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs,express",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: gptclonewebsite,
    source_code_link: "https://github.com/JERRYYING02/project_openai_codex",
    eye_link:"https://project-openai-codex-pied.vercel.app/",
  },
  {
    name: "Music Visualizer",
    description:
      "A range of 2d & 3d wave music visualizer using fast-fourier transform",
    tags: [
      {
        name: "p5.js",
        color: "blue-text-gradient",
      },
      {
        name: "audio-generative-art",
        color: "green-text-gradient",
      },
      {
        name: "Fast-fourier transform",
        color: "pink-text-gradient",
      },
    ],
    image: visualizer,
    source_code_link: "https://github.com/JERRYYING02/MusicVisualizer",
    eye_link:"https://jerryying02.github.io/MusicVisualizer/",
  },
  {
    name: "Arduino & Esp32 Plant Watering System",
    description:
      "Collect & read soil moisture and react to water pump, data is monitored on cloud database",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "esp32",
        color: "green-text-gradient",
      },
      {
        name: "IOT",
        color: "pink-text-gradient",
      },
      {
        name: "PHP,SQL",
        color: "yellow-text-gradient",
      }
   
    ],
    image: plantdcs,
    source_code_link: "https://github.com/JERRYYING02/MusicVisualizer",
    eye_link:"https://jerryying02.github.io/MusicVisualizer/",
  },
];

export { services, technologies, experiences, testimonials, projects };