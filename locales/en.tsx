import { Content } from "@/types/content";

export const en: Content = {
  metadata: {
    title: "Leandro César",
    description:
      "Leandro César's CV. Tech lead, backend developer, specialist in automations and AI-powered solutions.",
    keywords: ["Leandro César"],
    authors: { name: "Leandro César" },
    creator: "Leandro César",
    metadataBase: new URL("https://github.com/leandcesar"),
    icons: { icon: "/favicon.ico" },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  header: {
    title: "Leandro César",
    subtitle: "Engineer. Developer. Leader.",
  },
  sections: [
    {
      section: "About",
      paragraph: [
        {
          description:
            "Experienced professional with a strong background in technical leadership, backend development, Artificial Intelligence and automation. Brings strategic focus to high-performance projects through efficient system integration, process optimization, and infrastructure management. Highly analytical, results-driven, and well-organized, with proven ability to build teams, standardize workflows, and deliver high-quality outcomes.",
        },
      ],
    },
    {
      section: "Experience",
      shortcut: "Linkedin",
      paragraph: [
        {
          title: "Tech Lead",
          subtitle: "Cloudiabot",
          subtitleUrl: "https://www.cloudia.com.br/",
          period: "Jan 2022 - Present",
        },
        {
          title: "Python Developer",
          subtitle: "Cloudiabot",
          subtitleUrl: "https://www.cloudia.com.br/",
          period: "Jan 2021 - Dec 2021",
        },
        {
          title: "Junior Consultant",
          subtitle: "BASF",
          subtitleUrl: "https://www.basf.com/",
          period: "Jul 2019 - Dec 2019",
        },
        {
          title: "Junior Consultant",
          subtitle: "Ball Corporation",
          subtitleUrl: "https://www.ball.com/",
          period: "Feb 2019 - Jun 2019",
        },
        {
          title: "Tech Lead",
          subtitle: "Ex Machina UNIFEI",
          subtitleUrl:
            "https://proex.unifei.edu.br/extensao-tecnologica-e-empresarial/competicao-tecnologica/ex-machina/",
          period: "Mar 2017 - Dec 2019",
        },
      ],
    },
    {
      section: "Education",
      paragraph: [
        {
          title: "Graduation in Control and Automation Engineering",
          subtitle: "UNIFEI (Federal University of Itajubá)",
          subtitleUrl: "https://www.unifei.edu.br/",
          period: "Jan 2016 - Dec 2020",
        },
      ],
    },
    {
      section: "Projects",
      shortcut: "Github",
      paragraph: [
        {
          title: "Peak Detection",
          titleUrl: "https://github.com/leandcesar/PeakDetection",
          description:
            "Arduino library for real time peak detection with z-score.",
        },
      ],
    },
    {
      section: "Skills",
      paragraph: [
        {
          list: [
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
      ],
    },
    {
      section: "Languages",
      shortcut: "Language",
      paragraph: [{ list: ["Portuguese - Native", "English - Advanced"] }],
    },
    {
      section: "Contact",
      shortcut: "Email",
      paragraph: [{ description: "Email: ccleandroc@gmail.com" }],
    },
  ],
  footer: {
    text: `${new Date().getFullYear()} © Leandro César`,
    url: "https://github.com/leandcesar/cv",
  },
  actions: [
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
      type: "PDF",
      name: "Download PDF",
      section: "Download",
      keywords: "pdf download cv resume",
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
};

export default en;
