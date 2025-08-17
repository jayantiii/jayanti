/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "G-DV2VQCPZ98",
};

//Home Page
const greeting = {
  title: "Hey!",
  title2: "Jayanti",
  logo_name: "Jayanti Lahoti",
  nickname: "Jayanti",
  full_name: "Jayanti Lahoti",
  subTitle: `MSCS @ UC San Diego
  
Software Engineer with experience in cloud systems and Machine Learning.
Seeking 2026 New Grad Software Engineering and AI roles.`,
  resumeLink: "https://jayanti-lahoti-resume.tiiny.site/",
  mail: "mailto:jlahoti@ucsd.edu",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/jayantiii",
  linkedin: "https://www.linkedin.com/in/jayanti-lahoti/",
  gmail: "jlahoti@ucsd.edu",
  // gitlab: "https://gitlab.com/harikanani",
  // facebook: "https://www.facebook.com/harikrishan.kanani/",
  // twitter: "https://twitter.com/Harikrushn9",
  // instagram: "https://www.instagram.com/hari_kanani_/",
};

const skills = {
  data: [
    {
      title: "ML and Computer Vision",
      fileName: "FullStackImg",
      skills: [
        "Designing and deploying machine learning models across diverse domains, including vision, NLP, and structured data.",

        "Building intelligent applications that apply deep learning and computer vision to solve real-world challenges.",

        "Implementing complete ML pipelines, from data collection and preprocessing to training, evaluation, and deployment.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "fa-brands:python",
          style: {
            color: "#3776AB", // Python's official blue
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#FF6F00",
          },
        },
        {
          skillName: "Scikit Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            color: "#D00000",
          },
        },
        {
          skillName: "ONNX",
          fontAwesomeClassname: "simple-icons:onnx",
          style: {
            color: "#005CED",
          },
        },
        {
          skillName: "CUDA",
          fontAwesomeClassname: "simple-icons:nvidia",
          style: {
            color: "#76B900",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:matplotlib",
          style: {
            color: "#11557C",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            color: "#FFB000",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:python", // no official icon
          style: {
            color: "#0E76A8",
          },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#412991",
          },
        },
        {
          skillName: "LLaMA",
          fontAwesomeClassname: "simple-icons:meta", // Meta AI
          style: {
            color: "#0466C8",
          },
        },
        {
          skillName: "RAG (Retrieval-Augmented Generation)",
          fontAwesomeClassname: "simple-icons:elastic", // often paired with vector DBs
          style: {
            color: "#005571",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Vector Databases",
          fontAwesomeClassname: "fa-solid:database", // fallback since Pinecone/Weaviate not in FA
          style: {
            color: "#0A9396",
          },
        },
        {
          skillName: "GCP AI Platform",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "Developing responsive and engaging front-end applications.",
        "Engineering secure and scalable back-end services",
        "Designing and managing databases, and deploying applications on cloud platforms.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "fa-brands:python",
          style: {
            color: "#3776AB", // Python's official blue
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "fa-brands:node-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "GCP AI Platform",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Microsoft Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            color: "#4EAA25",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },

        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#231F20",
          },
        },
        {
          skillName: "NGINX",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#E10098",
        //   },
        // },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of California, San Diego",
      subtitle: "MS in Computer Science",
      logo_path: "ucsd.png",
      alt_name: "UCSD",
      duration: "Sept 2024 - Current",
      descriptions: [
        "Specializing in Artificial Intelligence with coursework in Software, Deep Learning, and Embedded Systems.",
      ],
      website_link: "https://ucsd.edu/",
    },
    {
      title: "University of Southern Denmark",
      subtitle: "Elite Robotics and Entreprenuership Summer Program",
      logo_path: "sdu.png",
      alt_name: "",
      duration: "Aug 2025 - Aug 2025",
      descriptions: [
        "Participated in a fully funded specialized program focusing on robotics Innovation in Odense, Denmark.",
      ],
      website_link: "https://robotelite.sdu.dk/program/",
    },
    {
      title: "BMS College Of Engineering",
      subtitle: "B.E in Computer Science",
      logo_path: "bmsce.jpg",
      alt_name: "",
      duration: "2019 - 2023",
      descriptions: [
        "Bachelors in Computer Science Engineering with a focus on Machine Learning and Software Development.",
      ],
      website_link: "https://www.bmsce.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud Platform Professional Machine Learning Engineer",
      subtitle: "Google Cloud Certified",
      logo_path: "gc.png",
      certificate_link:
        "https://www.credly.com/badges/f5308ef0-09c2-4e5d-9780-3944193bf319",
      alt_name: "",
      // color_code: "#2AAFED",
      color_code: "",
    },
    {
      title: "Azure AI Fundamentals",
      subtitle: "Microsoft Certified",
      logo_path: "azure.png",
      certificate_link:
        "https://www.credly.com/badges/e062f0fb-85b6-47f4-9086-b8609e70ad0f/public_url",
      alt_name: "",
      // color_code: "#2AAFED",
      color_code: "",
    },
    {
      title: "Intermediate Machine Learning",
      subtitle: "Kaggle",
      logo_path: "kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/jayantii/intermediate-machine-learning",
      alt_name: "",
      color_code: "",
    },
    {
      title: "Tensorflow Developer",
      subtitle: "Google Certified",
      logo_path: "tensor.png",
      certificate_link:
        "https://www.credential.net/0e699cbb-aa46-4cc4-bdfd-bfb922af80e4#acc.On4XwHJW",
      alt_name: "",
      // color_code: "#F6B808",
      color_code: "",
    },
    {
      title: "Scaled Agile Framework (SAFe) 6 Practitioner",
      subtitle: "Certtification Sponsored by HPE",
      logo_path: "safe.png",
      certificate_link: "",
      alt_name: "Workshop",
      color_code: "",
    },
    {
      title: "Amazon ML Summer school 2022",
      subtitle: "Selected out of 1000+ applicants",
      logo_path: "amazonml.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "",
    },
    {
      title: "Hacktoberfest",
      subtitle: "Open Source Contribution",
      logo_path: "hackfest.png",
      certificate_link: "",
      alt_name: "",
      color_code: "",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "At HPE, I developed key UI features for Alletra server management, including summary cards, device tables, and firmware updates, enhancing Hybrid Cloud capabilities. I automated inventory management, improving collaboration, and streamlined QA processes with a custom script, enhancing test coverage. Leveraging CI/CD pipelines and VMs, I optimized development and deployment workflows for greater efficiency.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Perception researcher",
          company: "Autonomous Vehicle Lab @ UCSD",
          company_url: "https://avl.ucsd.edu/?page_id=83",
          logo_path: "avl.jpeg",
          duration: " 2024 - Present",
          location: "San diego, California",
          description: "",
          color: "#0071C5",
        },
        {
          title: "System Software Engineer / Cloud Developer",
          company: "Hewlett Packard Enterpse",
          company_url: "https://www.hpe.com/",
          logo_path: "hpe.png",
          duration: "Aug 2023 - Aug 2024",
          location: "Bengaluru, India",
          description:
            "Working on cloud-based system software solutions within HPE Hybrid Cloud. Implemented features for server enablement, including summary dashboards, firmware management, and power actions. Contributed to CI/CD pipelines and infrastructure setup for large-scale system deployment and testing.",
          color: "#0071C5",
        },
        {
          title: "Research and Development Intern",
          company: "Hewlett Packard Enterpse",
          company_url: "https://www.hpe.com/",
          logo_path: "hpe.png",
          duration: "Jan 2023 - July 2023",
          location: "Bengaluru, India",
          description:
            "Enhanced UI with dynamic data and mock server integrations for scalability testing. Built key components such as device tables and power management actions. Collaborated with QA to develop reusable automation scripts, improving test efficiency and release cycles.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Other Experiences",
      experiences: [
        {
          title: "Segmenation and Pose estimation in Collaboration with LEGO",
          company: "The LEGO Group",
          company_url: "https://www.lego.com/",
          logo_path: "lego.png",
          duration: "August 2025",
          location: "Denmark",
          description:
            "Developed a computer vision system in collaboration with the LEGO Group to accurately segment and estimate the 6D pose of LEGO elements, enhancing automation in the LEGO manufacturing process.",
          color: "#0071C5",
        },
        {
          title: "Contributor - AI for Wind Energy",
          company: "FruitPunch.ai",
          company_url:
            "https://www.fruitpunch.ai/challenges/ai-for-wind-energy",
          logo_path: "fp.jpg",
          duration: "Oct 2020 - Feb 2022",
          location: "Virtual Global Team",
          description:
            "Contributed to a global challenge applying AI for predictive maintenance in wind turbines. Worked on developing and evaluating ML pipelines using real-world sensor data to detect anomalies and improve fault prediction accuracy.",
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: ".",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pic.jpg",
    description:
      "Happy to connect! Lets talk code, research, or just exploring curious ideas.",
  },
};

const projects = {
  data: [
    {
      id: "",
      name: "Tryton - Underwater Drone",
      url:
        "https://docs.google.com/presentation/d/14_-eYM9vmjBHniISU-A5tNljjWPsXSRbGckBbMMk77k/",
      description:
        "Built Tryton, a fully 3D-printed underwater ROV integrating ArduPilot, QGroundControl, and Raspberry Pi for subaquatic exploration.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Demonstration Video",
          url: "",
          iconifyClass: "ri:youtube-fill",
        },
      ],
      images: ["lego.png", "gc.png"],
      // video: "/videos/tryton-demo.mp4" // optional
    },
    {
      id: "0",
      name: "Waste Segregation using AI",
      url: "",
      description:
        "Developed a robotic arm system utilizing YOLOv5 and Raspberry Pi for intelligent waste classification and segregation.",
      languages: [{ name: "Python", iconifyClass: "logos-python" }],
      links: [
        {
          name: "Github",
          url: "https://github.com/jayantiii/WasteDetection",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Publication",
          url: "https://peerj.com/articles/cs-1957/",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "",
      name: "Autonomous IoT Projects",
      url:
        "https://docs.google.com/presentation/d/1RWDPntlUe9bdbhnA5zo4xMuQmt8qEPl2BvWUkz4vpQc/edit#slide=id.p",
      description:
        "Implementation of waste Management using tello Drone. Attendance System & Efficient Electricity usage using RFID. Smart Bins system with Ultrasonic sensors.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/jayantiii/PhaseShift_TeamShambles",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Presentation",
          url:
            "https://docs.google.com/presentation/d/1RWDPntlUe9bdbhnA5zo4xMuQmt8qEPl2BvWUkz4vpQc/edit#slide=id.p",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "",
      name: "HackConnect",
      url: "",
      description:
        "Developed a university-based platform for connecting students to collaborate on hackathons and side projects using Next.js and TypeScript.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/jayantiii/HackConnect",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "",
      name: "Audio Based Bird Classification",
      url: "https://github.com/jayantiii/indian-bird-classification",
      description:
        "Scraped and curated a custom dataset of 5000+ Indian bird audio samples, preprocessed the signals, and trained an CNN model with transfer learning.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/jayantiii/indian-bird-classification",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "",
      name: "RL in Grid-based Maze",
      url: "https://github.com/jayantiii/Q-learning-maze-251b",
      description:
        "Implemented Q-learning with various exploration strategies to optimize agent navigation",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/jayantiii/Q-learning-maze-251b",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "",
      name: "Eye Gaze Tracking",
      url: "https://github.com/jayantiii/eye_gaze_tracking",
      description:
        "Developed an eye movement tracking system capable of detecting gaze directions—up, down, left, right—and blinks using Python, OpenCV, and Dlib.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/jayantiii/eye_gaze_tracking",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Demonstration Video",
          url: "https://youtu.be/465mp30k1UY",
          iconifyClass: "ri:youtube-fill",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
