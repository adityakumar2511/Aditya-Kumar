import wordCounterImg from "../assets/ProjectsImg/wordCounter.png";
import simonGameImg from "../assets/ProjectsImg/simonGames.png";
import stackGameImg from "../assets/ProjectsImg/stackGame.png";
import bubbleGameImg from "../assets/ProjectsImg/bubbleGame.png";
import sarkariYojanaWebImg from "../assets/ProjectsImg/sarkariYojanaWeb.png";
import notesSaverImg from "../assets/ProjectsImg/notesSaver.png";
import hpsptImg from "../assets/ProjectsImg/hpspt.png";
import amberImg from "../assets/ProjectsImg/amber.png";
import CSSCPImg from "../assets/ProjectsImg/csscp.png";
import ibrandSolutionImg from "../assets/ProjectsImg/ibrandSolution.png";
import skyproImg from "../assets/ProjectsImg/skypro.png";
import bebeyondLandingPageImg from "../assets/ProjectsImg/bebeyondLandingPage.png";
import AgarwalBagHouseImg from "../assets/ProjectsImg/agarwalBagHouse.png";
import HiProBagsImg from "../assets/ProjectsImg/hiProBags.png";
import madhuRekhaBillingSoftwareImg from "../assets/ProjectsImg/madhuRekhaBillingSoftware.png";
import emsImg from "../assets/ProjectsImg/ems.png";
import ubermsImg from "../assets/ProjectsImg/uberms.png";
import royalRajasthanWeddingImg from "../assets/ProjectsImg/royalRajasthanWedding.png";
import provolPromotionsImg from "../assets/ProjectsImg/provolPromotions.png";

const projectsData = [


  // Employee Management System Project
  {
    category: "Full Stack",
    title: "Employee Management System",
    image: emsImg,
    description: "EMS Pro is an enterprise-grade Employee Management System built with the MERN Stack. It features GPS-based geofenced attendance tracking, dynamic salary builder with auto LOP calculation, leave management with approval workflow, task assignment, real-time Firebase dashboard, and PDF/Excel report generation. Separate role-based dashboards for Admin and Employee with PWA support. Demo credentials available in the Frontend GitHub Repository README File.",
    techStack: ["React.js", "Next.js", "Node.js", "Express", "PostgreSQL", "Firebase", "Tailwind", "Framer Motion", "Vercel"],
    github: "https://github.com/adityakumar2511/Employee-Management-System-Frontend",
    github2: "https://github.com/adityakumar2511/Employee-Management-System-Backend",
    live: "https://employee-management-system-2511.vercel.app/",
  },

  // Madhu Rekha Billing Software Project
  {
    category: "Full Stack",
    title: "Madhu Rekha Billing Software",
    image: madhuRekhaBillingSoftwareImg,
    description:
      "Madhu Rekha Billing Software is a responsive web-based billing and invoicing application built with modern frontend technologies. It allows users to generate invoices, manage billing items, and track customer details efficiently. Designed with an intuitive user interface, the app improves billing accuracy and workflow speed. The project is deployed on Vercel for fast performance and seamless access across devices.",
    techStack: ["React", "Vite", "Tailwind", "Node", "Express", "Firebase", "SheetIntegration"],
    github: "https://github.com/adityakumar2511/Madhu-Rekha-Billing-Software-Frontend",
    github2: "https://github.com/adityakumar2511/Madhu-Rekha-Billing-Software-Frontend",
    live: "https://madhu-rekha-billing-software-fronte.vercel.app/",
  },


  // SkyPro Aviation Website Project
  {
    category: "Full Stack",
    title: "SkyPro Aviation Website",
    image: skyproImg,
    description:
      "SkyPro Aviation Website is a professional aviation training academy site built on WordPress, highlighting pilot training programs, DGCA ground classes, and license conversion services. The Admission Form and Recency Form are built as separate Full Stack applications with database integration for managing student submissions and recency records efficiently.",
    techStack: ["WordPress", "Elementor", "Contact Form 7", "React", "Node.js", "Express", "Firebase", "Tailwind", "Google Sheets API"],
    live: "https://skyproaviation.org/",
  },


  //CSSCP Website Project
  {
    category: "WordPress",
    title: "CSSCP Website",
    image: CSSCPImg,
    description:
      "Chandra Shekhar Singh College of Pharmacy Website is an educational institution site that showcases academic programs, campus information, and admission details for pharmacy courses. Built with a structured layout, it provides clear navigation for visitors to explore courses, faculty, facilities, and contact information.",
    techStack: ["WordPress", "Elementor", "WP Forms", "ACF", "HTML", "CSS"],
    github: "#",
    live: "https://csscp.in/",
  },

  // Uberms Project
  {
    category: "WordPress",
    title: "Uberms Website",
    image: ubermsImg,
    description:
      "Uberms is a professional WordPress-based website built with a clean and responsive layout. It showcases the brand's services and offerings with structured sections, intuitive navigation, and clear calls-to-action to help visitors explore and connect with the business easily.",
    techStack: ["WordPress", "Elementor", "WooCommerce", "WP Forms", "HTML", "CSS"],
    github: "#",
    live: "https://uberms.com/",
  },


  // Royal Rajasthan Wedding Project
  {
    category: "WordPress",
    title: "Royal Rajasthan Wedding",
    image: royalRajasthanWeddingImg,
    description:
      "Royal Rajasthan Wedding is an elegant WordPress-based wedding planning website that showcases venues, services, and wedding packages. Designed with a rich visual layout, it helps couples explore offerings and connect with the team for their dream Rajasthani wedding experience.",
    techStack: ["WordPress", "Elementor", "WP Forms", "Social Media Feed", "HTML", "CSS"],
    github: "#",
    live: "https://royalrajasthanwedding.co.in/",
  },

  // BeBeyond Digital Shopify Landing Page Project
  {
    category: "Landing Page",
    title: "BeBeyond Digital Solutions",
    image: bebeyondLandingPageImg,
    description:
      "BeBeyond Digital Shopify Landing Page is a modern, responsive landing page designed to promote Shopify services. It showcases core offerings, client solutions, and calls-to-action with a clean layout and engaging visuals. The page guides visitors through value propositions and encourages lead generation with clear buttons and structured content.",
    techStack: ["React", "vite", "Tailwind CSS", "Framer Motion", "SheetIntegration"],
    github: "#",
    live: "https://shopify.bebeyond.digital/",
  },
  
  // Agarwal Bag House Project
  {
    category: "WordPress",
    title: "Agarwal Bag House",
    image: AgarwalBagHouseImg,
    description:
      "Agarwal Bag House Website is a WordPress-based informational product showcase site that displays different types of bags and accessories. Designed with a clean and responsive layout, it highlights product details, categories, and business information without ecommerce checkout functionality, helping users explore products and contact the business easily.",
    techStack: ["WordPress", "Elementor", "wooCommerce", "WP Forms", "HTML", "CSS"],
    github: "#",
    live: "https://agarwalbaghouse.com/",
  },

  // Hi-Pro Bags Website Project
  {
    category: "WordPress",
    title: "Hi-Pro Bags Website",
    image: HiProBagsImg,
    description:
      "Hi Pro Bags Website is a minimal product showcase site featuring the brand’s tagline “Elevate Your Style” and contact information. It displays product branding and company details in a simple, responsive layout with clear calls to connect. Designed to present bag products and build brand awareness, it focuses on presentation rather than ecommerce transactions.",
    techStack: ["WordPress", "Elementor", "wooCommerce", "WP Forms", "HTML", "CSS"],
    github: "#",
    live: "https://hiprobags.com/",
  },

  

  // IBrand Solutions Project
  {
    category: "WordPress",
    title: "IBrand Solutions",
    image: ibrandSolutionImg,
    description:
      "iBrand Solutions Website is a professional digital marketing agency site that highlights services such as performance marketing, UGC content, and online advertising strategy. Built with a modern responsive layout, it helps businesses enhance online presence  and generate leads.",
    techStack: ["WordPress", "Elementor", "WP Forms", "HTML", "CSS"],
    github: "#",
    live: "https://ibrand.solutions/",
  },


  // Amber Website Project
  {
    category: "WordPress",
    title: "Amber Website",
    image: amberImg,
    description:
      "Amber Events Website is a responsive WordPress-based website designed to showcase event services, café, catering, and guest house offerings. It features a visually rich layout, structured service sections, and user-friendly navigation to help visitors explore services and contact the business easily.",
    techStack: ["WordPress", "Elementor", "WP Forms", "HTML", "CSS"],
    github: "#",
    live: "https://ambercafe.in/",
  },

  // Provol Promotions Project
  {
    category: "React website",
    title: "Provol Promotions",
    image: provolPromotionsImg,
    description:
      "Provol Promotions is a modern React-based website designed to showcase promotional services and brand solutions. Built with a responsive layout and smooth user experience, it highlights the agency's offerings, portfolio, and contact information to drive engagement and lead generation.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/adityakumar2511/ProVol-Promotions",
    live: "https://provolpromotions.com/",
  },

  // Help People to Save People Trust Project
  {
    category: "React website",
    title: "Help People to Save People Trust",
    image: hpsptImg,
    description:
      "Help People To Save People Trust is a responsive nonprofit website built using React and Vite. It highlights the organization’s mission, programs, and community impact through a clean and user-friendly interface. The site is optimized for fast performance and smooth navigation across devices.",
    techStack: ["React", "Vite", "Tailwind", "Google Forms", "Framer Motion", "Vercel"],
    github: "#",
    live: "https://www.helppeopletosavepeopletrust.org/",
  },

  // Notes Saver React App Project
  {
    category: "React App",
    title: "Notes Saver React App",
    image: notesSaverImg,
    description:
      "Notes Saver App is a simple and responsive note-taking application built with React and Vite. It allows users to create, edit, and delete notes, with data stored in local storage to persist across sessions. The app is deployed on Vercel for fast and reliable performance.",
    techStack: ["React", "Vite", "Tailwind", "Local Storage", "Vercel"],
    github: "https://github.com/adityakumar2511/Notes-Saver-App",
    live: "https://notes-saver-app-sandy.vercel.app/",
  },


  // Sarkari Yojana Web Project
  {
    category: "HTML/CSS/JS",
    title: "Sarkari Yojana Web",
    image: sarkariYojanaWebImg,
    description:
      "Sarkari Yojana Web is a dynamic informational website built using HTML, CSS, JavaScript, PHP, and MySQL to provide details about various government schemes. It features a structured layout, interactive elements, and a backend database to manage and display scheme data efficiently, ensuring a smooth and user-friendly experience.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/adityakumar2511/Sarkari-Yojana-Web",
    live: "https://sarkariyojanaweb.free.nf/",
  },

  // Bubble Game Project
  {
    category: "HTML/CSS/JS",
    title: "Bubble Game",
    image: bubbleGameImg,
    description:
      "A fun and interactive number puzzle game with a timer, hints, and live scoring system, built using HTML, CSS, and JavaScript.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/adityakumar2511/Buuble-Game",
    live: "https://adityakumar2511.github.io/Buuble-Game/",
  },

  // Stack Game Project
  {
    category: "HTML/CSS/JS",
    title: "Stack Game",
    image: stackGameImg,
    description:
      "A fun and interactive stack game built with HTML, CSS, and JavaScript, featuring real-time scoring and responsive UI.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/adityakumar2511/stake-game",
    live: "https://adityakumar2511.github.io/stake-game/",
  },

  // Simon Game Project
  {
    category: "HTML/CSS/JS",
    title: "Simon Game",
    image: simonGameImg,
    description:
      "A browser-based Simon Game that challenges users to repeat sequences of colors and sounds, built with interactive UI.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/adityakumar2511/Simon-Game",
    live: "https://adityakumar2511.github.io/Simon-Game/",
  },

  // Word & Character Counter Project
  {
    category: "HTML/CSS/JS",
    title: "Word & Character Counter",
    image: wordCounterImg,
    description:
      "A simple and responsive web app that counts words and characters in real time as the user types. Built with a clean UI and efficient logic to provide instant and accurate text statistics.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/adityakumar2511/Word-Counter",
    live: "https://adityakumar2511.github.io/Word-Counter/",
  },
];

export default projectsData;
