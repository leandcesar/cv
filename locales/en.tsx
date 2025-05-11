import { Content } from "@/types/content";

export const en: Content = {
  name: "Leandro César",
  role: "Engineer. Developer. Leader.",
  description:
    "Leandro César's resume. Tech lead, backend developer, specialist in automations and AI-powered solutions.",
  keywords: ["Leandro César"],
  site: "https://github.com/leandcesar",
  about: {
    label: "About",
    value:
      "Experienced professional with a strong background in technical leadership, backend development, Artificial Intelligence and automation. Brings strategic focus to high-performance projects through efficient system integration, process optimization, and infrastructure management. Highly analytical, results-driven, and well-organized, with proven ability to build teams, standardize workflows, and deliver high-quality outcomes.",
  },
  experiences: {
    label: "Experience",
    value: [
      {
        title: "Tech Lead",
        company: "Cloudiabot",
        period: "Jan 2022 - Present",
        description: "",  // TODO: add description
        url: "https://www.cloudia.com.br/",
      },
      {
        title: "Python Developer",
        company: "Cloudiabot",
        period: "Jan 2021 - Dec 2021",
        description: "",  // TODO: add description
        url: "https://www.cloudia.com.br/",
      },
      {
        title: "Junior Consultant",
        company: "BASF",
        period: "Jul 2019 - Dec 2019",
        description: "",  // TODO: add description
        url: "https://www.basf.com/",
      },
      {
        title: "Junior Consultant",
        company: "Ball Corporation",
        period: "Feb 2019 - Jun 2019",
        description: "",  // TODO: add description
        url: "https://www.ball.com/",
      },
      {
        title: "Tech Lead",
        company: "Ex Machina UNIFEI",
        period: "Feb 2019 - Jun 2019",
        description: "",  // TODO: add description
        url: "https://proex.unifei.edu.br/extensao-tecnologica-e-empresarial/competicao-tecnologica/ex-machina/",
      },
    ],
  },
  education: {
    label: "Education",
    value: [
      {
        title: "Graduation in Control and Automation Engineering",
        institution: "UNIFEI (Federal University of Itajubá)",
        period: "Jan 2016 - Dec 2020",
        description: "",  // TODO: add description
        url: "https://www.unifei.edu.br/",
      },
    ],
  },
  projects: {
    label: "Projects",
    value: [
      {
        title: "Peak Detection",
        description:
          "Arduino library for real time peak detection with z-score.",
        url: "https://github.com/leandcesar/PeakDetection",
      },
    ],  // TODO: add more projects
  },
  skills: {
    label: "Skills",
    value: [
      "Backend",
      "Artificial Intelligence",
      "Automations",
      "LLM",
      "Chatbots",
      "Cloud Computing",
      "Python",
      "Golang",
      "n8n",
      "Make",
      "AWS",
      "CI/CD",
      "APIs Restful",
      "GraphQL",
      "Docker",
      "Git",
      "MySQL",
      "Postgres",
      "MongoDB",
      "Redis",
    ],
  },
  languages: {
    label: "Languages",
    value: [
      {
        language: "Portuguese",
        level: "Native",
      },
      {
        language: "English",
        level: "Advanced",
      },
    ],
  },
  contact: {
    label: "Contact",
    value: "Email: ccleandroc@gmail.com",
  },
  source: {
    label: "Source Code",
    value: "https://github.com/leandcesar/resume",
  },
  actions: {
    label: "Press",
    value: [
      {
        type: "Theme",
        name: "Toggle theme",
        section: "Settings",
        keywords: "tema theme escuro dark claro light mode",
      },
      {
        type: "Language",
        name: "Toggle language",
        section: "Settings",
        keywords: "idioma linguagem language português english inglês",
      },
      {
        type: "Email",
        section: "Contact",
        keywords: "email mail gmail contact e",
        url: "mailto:ccleandroc@gmail.com",
      },
      {
        type: "Linkedin",
        section: "Contact",
        keywords: "social media linkedin",
        url: "https://linkedin.com/in/leandcesar",
      },
      {
        type: "Github",
        section: "Social Media",
        keywords: "git github gh",
        url: "https://github.com/leandcesar",
      },
      {
        type: "Instagram",
        section: "Social Media",
        keywords: "social media instagram ig",
        url: "https://instagram.com/leandcesar",
      },
      {
        type: "Facebook",
        section: "Social Media",
        keywords: "social media facebook fb",
        url: "https://facebook.com/leandcesar",
      },
      {
        type: "Threads",
        section: "Social Media",
        keywords: "social media threads th",
        url: "https://threads.com/@leandcesar",
      },
      {
        type: "X",
        section: "Social Media",
        keywords: "social media x twitter tt",
        url: "https://x.com/leandcesar",
      },
    ],
  },
};

export default en;
