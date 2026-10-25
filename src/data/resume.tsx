import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Award, FileText } from "lucide-react";

export const DATA = {
  name: "Manas Tiwari",
  initials: "MT",
  url: "https://github.com/manasTiwari-IR",
  location: "Greater Noida, Uttar Pradesh, India",
  description:
    "Full-Stack Developer & Backend Engineer specializing in scalable web systems, asynchronous pipelines, and agentic AI workflows. Passionate about high-throughput architectures and robust software design.",
  summary:
    "As a Computer Science undergraduate, I specialize in full-stack MERN development, scalable backend architecture, and agentic AI. I have hands-on experience building decoupled, high-throughput processing systems using FastAPI, TaskIQ, and Redis to handle heavy LLM workloads. A dedicated problem solver, I have solved 800+ problems across LeetCode, Codeforces, and GeeksforGeeks, and actively compete in national hackathons like SIH.",
  avatarUrl: "/me.jpeg",
  skills: [
    "C++",
    "Python",
    "TypeScript",
    "JavaScript",
    "React.js",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "REST API",
    "WebSocket",
    "WebRTC",
    "JWT",
    "Node.js",
    "Express.js",
    "FastAPI",
    "TaskIQ",
    "LangGraph",
    "LangChain",
    "ChromaDB",
    "FAISS",
    "Generative AI",
    "RAG",
    "Hugging Face",
    "Llama 3",
    "Gemini",
    "MongoDB",
    "MySQL",
    "Redis",
    "Docker",
    "Postman",
    "Vercel",
    "Render",
    "Cloudinary",
    "DSA",
    "System Design",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "/Manas_Tiwari_v3.pdf",
      icon: FileText,
      label: "Resume",
      external: true,
    },
  ],
  contact: {
    email: "manastiwari.personal@gmail.com",
    tel: "+91-9286153602",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/manasTiwari-IR",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manas-tiwari-8b1b26289",
        icon: Icons.linkedin,
        navbar: true,
      },

      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/ManasTiwariBoss/",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:manastiwari.personal@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "BizeeBuy – Intellifi Technologies Pvt Ltd",
      href: "",
      badges: [
        "LangGraph",
        "FastAPI",
        "TaskIQ",
        "Redis",
        "MySQL",
        "ApexCharts",
        "sqlglot",
        "RBAC",
      ],
      location: "Hybrid",
      title: "Full-Time Intern - Automation Projects",
      logoUrl: "/BizeeBuy-logo.png",
      start: "April 2026",
      end: "July 2026",
      description:
        "• Engineered an intelligent database querying assistant using LangGraph and FastAPI to translate natural language queries into optimized read-only MySQL syntax and ApexCharts visualizations.\n• Architected a decoupled processing pipeline using TaskIQ and Redis to offload heavy LLM execution, scaling to 2,000+ users and 100+ concurrent requests with distributed rate limiting.\n• Implemented a security layer using sqlglot AST parsing to neutralize SQL/prompt injection and enforced strict RBAC.",
    },
  ],

  education: [
    {
      school: "Indian Institute of Information Technology, Ranchi",
      href: "",
      degree: "B. Tech in Computer Science and Engineering · CGPA: 9.35",
      logoUrl: "/iiitranchi.jpg",
      start: "2023",
      end: "2027",
    },
    {
      school: "St. Joseph’s School, Greater Noida",
      href: "",
      degree: "10th and 12th (CISCE) · Percentage: 95%",
      logoUrl: "/stjosephsschool.png",
      start: "2019",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "WatchNest",
      href: "https://watchnest-frontend.vercel.app",
      dates: "Featured Project",
      active: true,
      description:
        "Modern feature-rich video streaming platform featuring secure JWT authentication, Cloudinary media optimization, and MongoDB aggregation pipelines.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "JWT",
        "Redux",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manasTiwari-IR/WatchNest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/watchnest.png",
      video: "",
    },
    {
      title: "Pulse Chat",
      href: "https://github.com/manasTiwari-IR/Pulse-Chat",
      dates: "Featured Project",
      active: true,
      description:
        "Real-time communication application supporting instant messaging, active user tracking, and low-latency peer-to-peer voice/video calling via WebRTC.",
      technologies: [
        "Node.js",
        "Express.js",
        "Socket.IO",
        "WebRTC",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manasTiwari-IR/Pulse-Chat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pulse-chat.png",
      video: "",
    },
  ],

  miniprojects: [
    {
      title: "Porsche Website Clone",
      href: "https://porsche-website-clone-git-main-manastiwari-irs-projects.vercel.app/",
      dates: "Featured Project",
      active: true,
      description:
        "Fully responsive recreation of the Porsche India homepage, combining automotive visuals, structured content sections, and responsive layouts using Bootstrap, custom CSS, and JavaScript.",
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "JavaScript",
        "Responsive Design",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manasTiwari-IR/Porsche-Website-Clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/porche-clone.png",
      video: "",
    },
    {
      title: "Netflix Landing Page Clone",
      href: "https://netflix-clone-manastiwari-irs-projects.vercel.app/",
      dates: "Featured Project",
      active: true,
      description:
        "Responsive Netflix-inspired landing page that recreates the streaming platform's homepage layout, promotional sections, and visual styling using modern CSS techniques and Tailwind CSS.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manasTiwari-IR/Netflix-Landing-Page-Clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/netflix-clone.png",
      video: "",
    },
    {
      title: "GitHub Lens",
      href: "https://github-lens-git-main-manastiwari-irs-projects.vercel.app/",
      dates: "Featured Project",
      active: true,
      description:
        "GitHub profile explorer that uses the GitHub API to retrieve public profile details, including usernames, avatars, and bios, and presents the information in a clean card-based interface.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Vite",
        "Axios",
        "GitHub REST API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manasTiwari-IR/Github_Lens",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gitlens.png",
      video: "",
    },
    {
      title: "Tic Tac Toe",
      href: "https://tic-tac-toe-game-git-main-manastiwari-irs-projects.vercel.app/",
      dates: "Featured Project",
      active: true,
      description:
        "Interactive two-player Tic-Tac-Toe game featuring a responsive game board, turn-based gameplay, and win detection across rows, columns, and diagonals.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/manasTiwari-IR/Tic_tac_toe_game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tic-tac-toe.png",
      video: "",
    },
    {
      title: "JavaScript Calculator",
      href: "https://calculator-js-mini-project-git-main-manastiwari-irs-projects.vercel.app/",
      dates: "Featured Project",
      active: true,
      description:
        "Browser-based calculator supporting basic arithmetic and additional mathematical operations, including base-10 logarithms, natural logarithms, and factorial calculations.",
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
      links: [
        {
          type: "Source",
          href: "https://github.com/manasTiwari-IR/Calculator_JS_mini_Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/calculator.png",
      video: "",
    },
  ],

  webdevprojects: [
    // {
    //   title: "Safe Lending App",
    //   dates: "FlutterSprint Hackathon · Google Developer Club",
    //   location: "Chennai, India",
    //   description:
    //     "Built a Flutter-based Safe Lending application during the FlutterSprint Hackathon by Google Developer Club to digitize informal peer-to-peer lending. The app enables users to record loans, track repayments, and maintain transparent transaction histories, fostering trust and accountability. The project was shortlisted among the Top 10 teams out of 200+ participants. ---> Tools Used: Flutter, Dart, Firebase, Firestore SDK, Android SDK, Android Emulator",
    //   image: "/fluttersprint.png",
    //   links: [
    //     {
    //       title: "GitHub",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/manasTiwari-IR/Safe-Lending",
    //     },
    //     {
    //       title: "Certification",
    //       icon: <Award className="h-4 w-4" />,
    //       href: "",
    //     },
    //   ],
    // },
    {
      title:
        "SIH 2024 Project: An Interactive Job and Internship Platform for the Technical Education Department",
      dates: "Smart India Hackathon 2024",
      location: "Indian Institute of Information Technology Ranchi, India",
      description:
        "The platform is designed to assist students and graduates in finding job and internship opportunities by connecting them with potential employers. It enhances the transition from education to employment by offering personalized job matching, internship resources, and mentorship programs. The platform also provides employers with a streamlined process for posting job openings, reviewing applications, and managing recruitment efforts. Technologies used include React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
      image: "/SIH-logo.png",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/manasTiwari-IR/SIH_Project",
        },
        {
          title: "Presentation",
          icon: <Award className="h-4 w-4" />,
          href: "/SIH_PPT.pdf",
        },
      ],
    },
  ],

  certifications: [
    {
      title: "Internship Completion Certificate – BizeeBuy",
      issuer: "BizeeBuy – Intellifi Technologies Pvt Ltd",
      date: "August 2025",
      image: "/certifications/internship-bizeebuy.png",
      link: "/certifications/Internship-bizeebuy.pdf",
    },
  ],
} as const;
