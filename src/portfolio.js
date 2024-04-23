/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Daniel Bradley",
  title: "Hi, I'm Daniel",
  subTitle: emoji(
    "Dedicated and results-driven professional with six years of experience in operations, management, and sales leadership. Armed with a bachelor's in Economics, minor in Math, and a program certificate in Full Stack Software Development, I bring a unique blend of analytical prowess and technical skills. Proven track record in optimizing operational efficiency and leveraging technology to enhance business processes. Eager to contribute my versatile skill set to a dynamic and challenging role. I'm an avid golfer and a hardcore fan of all things golf."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1V5kPBheByWWM38mI-DeI7dD6etDNfNgtb8i-hEOI0NU/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dbradley555",
  linkedin: "http://www.linkedin.com/in/daniel-bradley555",
  gmail: "dbradley5555@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle:
    "I'm always trying to develop my current skills and learn new ones!",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"
    ),
    emoji("⚡ Develop back end databases and database management systems"),
    emoji("⚡ Progressive Web Applications ( PWA ) ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Texas at Austin",
      logo: require("./assets/images/UTaustinlogo.png"),
      subHeader: "Full Stack Software Engineering Bootcamp",
      duration: "November 2022 - May 2023",
      desc: "Earned a certificate in full stack web development",
      descBullets: [
        "A 24 week intensive program focused on gaining skills in full stack software engineering.",
        "Learn fundamental concepts of web development, including HTML, CSS, and JavaScript.",
        "Work with servers, databases, and other back end technologies, such as MySQL database, Node.js, and more.",
        "Acquire skills using NoSQL databases, convert traditional applications into progressive web applications, and learn React."
      ]
    },
    {
      schoolName: "The University of Texas at Austin",
      logo: require("./assets/images/UTaustinlogo.png"),
      subHeader: "Bachelor of Arts in Economics",
      duration: "August 2014 - December 2017",
      desc: "Minors:",
      descBullets: ["Mathematics", "Religious Studies"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Operations Manager",
      company: "Golf Galaxy / Dick's Sporting Goods",
      companylogo: require("./assets/images/gg_navy-logo_stacked.jpg"),
      date: "May 2018 – Present",
      desc: "",
      descBullets: [
        "Increased Sales by 7%, Increased Custom Penetration KPI by 6%, Increased NPS & OSAT KPIs by 10%, Increased Contribution to Budget KPI by 3%, Improved Fulfillment Capacity & Efficiency by 8%.",
        "Manage teammates assigned to the Operational Departments (i.e., Front End, Freight and Operations) and have a dotted line responsibility for managing associates in other areas of the store when serving as Head Coach. Hold teammates accountable for meeting established operational guidelines, brand standards, customer service expectations and company policies. Work closely with teammates to identify capabilities and readiness for new roles.",
        "Ensure the Operations Departments meet all operational standards including: Scan & Activate, SIM compliance, claims compliance, SFS/BOPIS fulfillment, speed of checkout, supply ordering, known theft log, stockroom organization standards, cash handling, LP audits, etc.",
        "Responsible for execution of the back-office procedures including: managing applicant flow, processing pre-hire/new-hire paperwork, ensuring I-9 compliance, processing background checks, processing terminations and final paycheck requests, processing personnel changes, preparing associate corrective actions, facilitating payroll/timekeeping changes, maintaining personnel files, attendance tracking and all state required personnel paperwork.", "Interview and make recommendations for hiring hourly teammates, including reviewing job applications to determine job fit and ensuring that teammates hired can meet the sales and operational aspects of their role. Handle teammate discipline (including issuing corrective action), appraisals, and performance matters. Make recommendations with respect to the termination and advancement of teammates."
      ]
    },
    {
      role: "Certified Personal Coach",
      company: "GOLFTEC",
      companylogo: require("./assets/images/GOLFTEC_Logo_black.jpg"),
      date: "May 2021 – March 2022",
      desc: "",
      descBullets: [
        "Increased Center Lessons Revenue by 18%, Increased Center Equipment Sales Revenue by 32%.",
        "Used professional expertise to recommend teaching and learning content and create custom lesson plans for students of varying skill levels. Recommended appropriate GOLFTEC services for each student. Participated in continuing education to enhance skills (distance learning, seminars, etc.). "
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "Major Projects done collaboratively in the UT Austin Coding Bootcamp.",
  projects: [
    {
      image: require("./assets/images/momart.png"),
      projectName: "MoMart",
      projectDesc:
        "This application was a continuation project from Thingamabobs, but using React instead of Handlebars. This resulted in a more dynamice website using the React framework. It added a cart feature, payment functionality, and overall a significantly better user experience. This was also a Group Project in the UT Coding Bootcamp.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://momart.herokuapp.com/"
        },
        {
          name: "Visit Repository",
          url: "https://github.com/romanjamess/MoMart"
        }
      ]
    },
    {
      image: require("./assets/images/Thingamabobs.png"),
      projectName: "Thingamabobs",
      projectDesc:
        "This application is an e-commerce website that allows users to purchase and sell items of their choice. This project was created as a Group Project in the UT Coding Bootcamp.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://treethingamabobs.herokuapp.com/"
        },
        {
          name: "Visit Repository",
          url: "https://github.com/treecao/thingamabobs/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/culture-cruncher.png"),
      projectName: "Culture Cruncher",
      projectDesc:
        "This application is designed to inform users about cultures and cuisines of different countries. This will help users that are interested in traveling to a specfic destination (or need help picking a destination), increase their knowledge of some key facts about the culture of a country, such as popular food, language, currency, etc. The application uses the REST Countries and YouTube APIs to display information and a video about a user inputted (or random) country. This project was created as a Group Project in the UT Coding Bootcamp.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dbradley555.github.io/culture-cruncher/"
        },
        {
          name: "Visit Repository",
          url: "https://github.com/dbradley555/culture-cruncher"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs to Read",
  subtitle:
    "I love to read and learn about new technologies and other things I find interesting.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://nolayingup.com/blog/jon-rahm-s-inevitability",
      title: "Jon Rahm's Inevitability",
      description:
        "The beauty of Jon Rahm’s dominance is how inescapable it feels.",
      author: "KVV - No Laying Up"
    },
    {
      url: "https://nolayingup.com/blog/kevin-van-valkenburg-what-do-we-do-about-slow-play",
      title: "What do we do about slow play?",
      description:
        "Why does it matter? Because playing fast at the highest level is supposed to be a skill.",
      author: "KVV - No Laying Up"
    },
    {
      url: "https://blogs.perficient.com/2023/01/14/what-is-chatgpt/",
      title: "What is ChatGPT ?",
      description:
        "We all know AI is the future. ChatGPT is a trending topic everywhere in the world right now.",
      author: "Dhirendra Sadananda"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcasts to Listen to 🎙️"),
  subtitle: "I love listening to podcasts on topics I'm passionate about.",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    <iframe
      title="Waveform"
      src="https://open.spotify.com/embed/show/6o81QuW22s5m2nfcXWjucc?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>,
    <iframe
      title="NLU"
      src="https://open.spotify.com/embed/show/3s3ihp9OHKAMuc46RitVPj?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>,
    <iframe
      title="Trap Draw"
      src="https://open.spotify.com/embed/show/23jobuvOaoUNr5n3uD9xhp?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>,
    <iframe
      title="Business Breakdowns"
      src="https://open.spotify.com/embed/show/417NPBWqtMbDU0FlWZTRDC?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just want to say hi? My inbox is always open.",
  number: "(832) 454-4373",
  email_address: "dbradley5555@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
