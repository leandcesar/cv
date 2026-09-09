import { Content } from "@/types/content";

export const en: Content = {
  header: {
    title: "Leandro César",
    subtitle: "Engineer. Developer. Leader.",
  },
  resumeButton: "View resume",
  homeButton: "Back to home",
  sections: [
    {
      section: "About",
      paragraph: [
        {
          description:
            "Experienced professional with a strong background in technical leadership, backend development, Artificial Intelligence, and automation. Brings strategic focus to high-performance projects through efficient system integration, process optimization, and infrastructure management. Highly analytical, results-driven, and organized, with proven ability to build teams, standardize workflows, and deliver high-quality outcomes.",
        },
      ],
    },
    {
      section: "Contact",
      shortcut: "Email",
      paragraph: [{ description: "Email: ccleandroc@gmail.com" }],
    },
    {
      section: "Experience",
      shortcut: "Linkedin",
      paragraph: [
        {
          title: "Cloudia",
          subtitle: "Tech Lead",
          titleUrl: "https://www.cloudia.com.br/",
          description:
            "Leads a team of 6 developers, managing priorities, delivery, and technical execution while contributing to product and architecture decisions. Hands-on development of an AI-powered chatbot for WhatsApp, Facebook, and Instagram, integrated with 30+ scheduling APIs. Own AWS infrastructure, CI/CD, automations, internal tools, code quality, observability, and performance optimization.",
          period: "Feb 2022 - Present",
        },
        {
          subtitle: "Software Developer",
          period: "Jun 2021 - Feb 2022",
        },
        {
          subtitle: "Software Development Intern",
          period: "Jan 2021 - Jun 2021",
        },
        {
          title: "BASF",
          subtitle: "Consultant (Apprentice)",
          titleUrl: "https://www.basf.com/br/pt",
          period: "Aug 2019 - Nov 2019",
        },
        {
          title: "UNIFEI (Federal University of Itajubá)",
          subtitle: "Scholarship Holder",
          titleUrl: "https://www.unifei.edu.br/",
          period: "Jul 2019 - Nov 2019",
        },
        {
          title: "Ball Corporation",
          subtitle: "Consultant (Apprentice)",
          titleUrl: "https://www.ball.com/sa",
          period: "Mar 2019 - Jun 2019",
        },
        {
          title: "Ex Machina UNIFEI",
          subtitle: "Technical Director",
          titleUrl:
            "https://proex.unifei.edu.br/extensao-tecnologica-e-empresarial/competicao-tecnologica/ex-machina/",
          period: "Jul 2018 - May 2019",
        },
        {
          subtitle: "Programming Director",
          period: "Jul 2017 - Jul 2018",
        },
        {
          subtitle: "Programmer",
          period: "Mar 2017 - Jul 2017",
        },
      ],
    },
    {
      section: "Education",
      paragraph: [
        {
          title: "UNIFEI (Federal University of Itajubá)",
          subtitle: "Graduation in Control and Automation Engineering",
          titleUrl: "https://www.unifei.edu.br/",
          period: "Jan 2016 - Dec 2020",
        },
      ],
    },
    {
      section: "Languages",
      shortcut: "Language",
      paragraph: [{ list: ["Portuguese - Native", "English - Advanced"] }],
    },
    {
      section: "Projects",
      shortcut: "Github",
      paragraph: [
        {
          title: "Enhancer for Letterboxd",
          titleUrl: "https://enhancer-for-letterboxd.vercel.app/",
          description:
            "Enhances the Letterboxd experience with additional features.",
        },
        {
          title: "onthisday.watch",
          titleUrl: "https://onthisday.watch/",
          description: "\"What should I watch today?\"",
        },
        {
          title: "PeakDetection",
          titleUrl: "https://github.com/leandcesar/PeakDetection",
          description:
            "Arduino library for real-time peak detection in data using z-score.",
        },
        {
          title: "themoviedb",
          titleUrl: "https://pypi.org/project/themoviedb",
          description:
            "Python API wrapper for The Movie Database (TMDb) API v3.",
        },
      ],
    },
    {
      section: "Volunteering",
      paragraph: [
        {
          title: "Bota Pra Fazer UNIFEI 2018",
          titleUrl: "https://www.instagram.com/botaprafazerunifei/",
          description:
            "Co-created an organic garden at Lar da Providência de Itajubá to support the institution in growing food for older residents.",
        },
        {
          title: "Bota Pra Fazer UNIFEI 2017",
          titleUrl: "https://www.instagram.com/botaprafazerunifei/",
          description:
            "Developed a math game for children at APAE de Itajubá to support learning of the positional decimal number system. The initiative won 1st place in the Innovation and Creativity category.",
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
            "Git",
            "GitHub",
            "GitHub Actions",
            "CI/CD",
            "Code review",
            "Deployments",
            "AWS RDS",
            "AWS ECS",
            "AWS EC2",
            "AWS Lambda",
            "AWS CloudWatch",
            "AWS S3",
            "AWS SQS",
            "MariaDB",
            "MySQL",
            "Postgres",
            "Redis",
            "n8n",
            "RabbitMQ",
            "LiteLLM",
            "OpenRouter",
            "OpenAI",
            "Gemini",
            "Make",
            "APIs Restful",
            "GraphQL",
            "Docker",
            "MongoDB",
          ],
        },
      ],
    },
  ],
  footer: {
    text: `${new Date().getFullYear()} © Leandro César`,
    url: "https://github.com/leandcesar/cv",
  },
  actions: [
    {
      type: "Language",
      name: "Toggle language",
      section: "Settings",
      keywords: "idioma linguagem language português english inglês",
    },
    {
      type: "Theme",
      name: "Toggle theme",
      section: "Settings",
      keywords: "tema theme escuro dark claro light mode",
    },
    {
      type: "Resume",
      name: "View resume",
      section: "Navigation",
      keywords: "resume cv home landing page",
    },
    {
      type: "PDF",
      name: "Download PDF",
      section: "Navigation",
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
