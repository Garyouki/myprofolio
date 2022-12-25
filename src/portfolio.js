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
  username: "Gary Zheng",
  title: "Hi all, I'm Gary",
  // subTitle: emoji(
  //   "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  // ),
  subTitle: "A passionate Full Stack Software Engineer dedicated to improving skills through hands-on learning and development work. Well-organized and collaborative team player with strong communication and analytical abilities.",
  resumeLink:
    "https://drive.google.com/file/d/1FYUJktGIZEBCaS_9A_e6STa0kwML2Fi6/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Garyouki",
  linkedin: "https://www.linkedin.com/in/zzh7/",
  gmail: "gary313312849@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [

    emoji(
      "⚡ Self-starter, creative, and problem-solver with a passion for learning new technologies and creating seamless user experiences. "
    ),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"
    ),
    emoji("⚡ Integration of third party services such as Azure/ AWS / GCP")
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
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mysql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "mongoDB-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-cloudflare"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Washington University in St Louis",
      logo: require("./assets/images/Washington_University.png"),
      subHeader: "Bachelor & Master of Science in Computer Science",
      duration: "September 2021 - May 2024",
      desc: "GPA: 4.00/4.00"
      // descBullets: [
      //   "4.00/4.00"
      // ]
    },
    {
      schoolName: "Denison University",
      logo: require("./assets/images/DU.jpeg"),
      subHeader: "Bachelor of Art in Mathematics",
      duration: "September 2018 - May 2021",
      desc: "GPA: 3.84/4.00"
      // descBullets: [
      //   "3.84/4.00"
      // ]
      // desc: "Courseworks:",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Development",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Internship",
      company: "Amazon",
      companylogo: require("./assets/images/amz.jpeg"),
      date: "Sept 2022 – Dec 2022",
      desc: "Skills: Python, AWS, Mockkito, Amazon S3, C++, Docker, Flask, Linux",
      descBullets: [
        "Developed a package for handling large amounts of network-probing data, resulting in a 96%+ success rate on the CI/CD pipeline",
        "Created a RESTful API using Flask for data uploading in the embedded cart system, which saved 50% of the time previously spent on data uploading",
        "Updated integrated systems, databases, and web applications to meet security standards in agile development."
      ]
    },
    {
      role: "Software Engineer Internship",
      company: "Elekta",
      companylogo: require("./assets/images/elekta.jpeg"),
      date: "May 2022 – Aug 2022",
      desc: "Skills: JavaScript, Node.js, C#, Azure, Mocha, React.js, MySQL, PostgreSQL",
      descBullets: [
        "Worked for Elekta SDK, enabling third-party applications to communicate with internal/external API endpoints.",
        "Maintained React-based web application with SQL, improving usability by 70%.",
        "Monitored frontend and backend services in production environments, reporting and tracking real-time outages and internal errors for over 500 products in the database."
      ]
    },
    {
      role: "Software Product Sprint Developer",
      company: "Google",
      companylogo: require("./assets/images/google.jpeg"),
      date: "May 2022 – Aug 2022",
      desc: "Skills: Java, HTML/CSS, JavaScript, Google Cloud, SpringBoot, Junit",
      descBullets: [
        "Led team to design and implement MVP web app, leveraging various Google Cloud Platform APIs.",
        "Applied industry best practices, including code reviews, codebase extension,and user interface planning.",
        "Managed and reviewed contributor pull requests for Google open-source, cross-platform application."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */


// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/quoraLogo.png"),
      projectName: "QA Platform",
      projectDesc: "A personal knowledge sharing platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Garyouki/QA-platform"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/food.jpeg"),
      projectName: "Food Calculator",
      projectDesc: "A food Calculator helps people calcuate users’ daily calorie intake",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/SPS-2022-Team-4/team-4-2022-summer-sps"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CodePath Tech Prep Interviewer",
      subtitle:
        "Helped students gain a preview of real-world software topics and be prepared to solve challenging algorithmic problems in whiteboard and coding interviews.",
      image: require("./assets/images/codepath.jpeg"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Google SPS",
      subtitle:
        "The Software Product Sprint (SPS) program is committed to increasing representation in tech by building a network of support for students who identify with historically excluded groups. ",
      image: require("./assets/images/g.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    }
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     // { name: "Certification", url: "" },
    //     // {
    //     //   name: "Final Project",
    //     //   url: "https://pakistan-olx-1.firebaseapp.com/"
    //     // }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "gary313312849@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
