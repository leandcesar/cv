import { LocalizedContent } from "@/types/content";

export const en: LocalizedContent = {
  header: {
    title: "Leandro César",
  },
  resumeButton: "Resume",
  sections: [
    {
      id: "about",
      section: "About",
      paragraph: [
        {
          description:
            "I'm a Tech Lead and backend engineer. I lead teams without stepping away from implementation. I work with AI, automation, and systems for conversational applications, from architecture to production. I especially enjoy reducing costs and optimizing performance — curious, considering I chose Python as my main language.",
        },
      ],
    },
    {
      id: "contact",
      section: "Contact",
      paragraph: [{ description: "Email: ccleandroc@gmail.com" }],
    },
    {
      id: "experience",
      section: "Experience",
      paragraph: [
        {
          title: "Cloudia",
          brand: "cloudia",
          subtitle: "Tech Lead",
          titleUrl: "https://www.cloudia.com.br/",
          description:
            "I lead a team of 6 developers, managing priorities, delivery, and technical execution while contributing to product and architecture decisions. I develop an AI-powered chatbot for WhatsApp, Facebook, and Instagram, integrated with 30+ scheduling APIs. I own AWS infrastructure, CI/CD, automations, internal tools, code quality, observability, and performance optimization.",
          period: "Feb 2022 - Present",
          startDate: "2022-02",
        },
        {
          subtitle: "Software Developer",
          period: "Jun 2021 - Feb 2022",
          startDate: "2021-06",
          endDate: "2022-02",
        },
        {
          subtitle: "Software Development Intern",
          period: "Jan 2021 - Jun 2021",
          startDate: "2021-01",
          endDate: "2021-06",
        },
        {
          title: "BASF",
          brand: "basf",
          subtitle: "Consultant (Apprentice)",
          titleUrl: "https://www.basf.com/br/pt",
          period: "Aug 2019 - Nov 2019",
          startDate: "2019-08",
          endDate: "2019-11",
        },
        {
          title: "UNIFEI (Federal University of Itajubá)",
          brand: "unifei",
          subtitle: "Research Scholarship (Physics Laboratory)",
          titleUrl: "https://unifei.edu.br/",
          period: "Jul 2019 - Nov 2019",
          startDate: "2019-07",
          endDate: "2019-11",
        },
        {
          title: "Ball Corporation",
          brand: "ball-corporation",
          subtitle: "Consultant (Apprentice)",
          titleUrl: "https://www.ball.com/sa",
          period: "Mar 2019 - Jun 2019",
          startDate: "2019-03",
          endDate: "2019-06",
        },
        {
          title: "Ex Machina",
          brand: "ex-machina",
          subtitle: "Technical Director",
          titleUrl:
            "https://proex.unifei.edu.br/extensao-tecnologica-e-empresarial/competicao-tecnologica/ex-machina/",
          period: "Jul 2018 - May 2019",
          startDate: "2018-07",
          endDate: "2019-05",
        },
        {
          subtitle: "Programming Director",
          period: "Jul 2017 - Jul 2018",
          startDate: "2017-07",
          endDate: "2018-07",
        },
        {
          subtitle: "Programmer",
          period: "Mar 2017 - Jul 2017",
          startDate: "2017-03",
          endDate: "2017-07",
        },
      ],
    },
    {
      id: "education",
      section: "Education",
      paragraph: [
        {
          title: "UNIFEI (Federal University of Itajubá)",
          brand: "unifei",
          subtitle: "Degree in Control and Automation Engineering",
          titleUrl: "https://unifei.edu.br/",
          period: "Jan 2016 - Dec 2020",
          startDate: "2016-01",
          endDate: "2020-12",
        },
      ],
    },
    {
      id: "languages",
      section: "Languages",
      paragraph: [{ list: ["Portuguese - Native", "English - Advanced"] }],
    },
    {
      id: "projects",
      section: "Projects",
      paragraph: [
        {
          title: "themoviedb",
          brand: "themoviedb",
          titleUrl: "https://pypi.org/project/themoviedb",
          description: "Typed Python client for the TMDb API with synchronous and asynchronous interfaces. Distributed on PyPI for movie and TV metadata across Python 3.8-3.14.",
        },
        {
          title: "PeakDetection",
          brand: "peak-detection",
          titleUrl: "https://github.com/leandcesar/PeakDetection",
          description: "Real-time peak detection for noisy sensor data on Arduino. Z-score analysis with moving averages for signal processing on resource-constrained hardware.",
        },
        {
          title: "Enhancer for Letterboxd",
          brand: "enhancer-for-letterboxd",
          titleUrl: "https://enhancer-for-letterboxd.vercel.app/",
          description: "Browser extension that turns Letterboxd into a richer analysis and discovery tool. Filtering, rating analytics, viewing statistics, and film discovery for power users.",
        },
        {
          title: "onthisday.watch",
          brand: "onthisday-watch",
          titleUrl: "https://onthisday.watch/",
          description: "Date-driven movie discovery for answering “What should I watch today?”. Uses the current day to surface relevant film recommendations.",
        },
      ],
    },
    {
      id: "volunteering",
      section: "Volunteering",
      paragraph: [
        {
          title: "Bota Pra Fazer UNIFEI 2018",
          brand: "unifei",
          titleUrl: "https://www.instagram.com/botaprafazerunifei/",
          description:
            "Co-created an organic garden at Lar da Providência de Itajubá to support the institution in growing food for older residents.",
        },
        {
          title: "Bota Pra Fazer UNIFEI 2017",
          brand: "unifei",
          titleUrl: "https://www.instagram.com/botaprafazerunifei/",
          description:
            "Developed a math game for children at APAE de Itajubá to support learning of the positional decimal number system. The initiative won 1st place in the Innovation and Creativity category.",
        },
      ],
    },
    {
      id: "skills",
      section: "Expertise",
      paragraph: [
        {
          title: "Backend",
          list: [
            "Python",
            "FastAPI",
            "Flask",
            "SQLAlchemy",
            "REST",
            "GraphQL",
            "JavaScript",
            "Golang",
          ],
        },
        {
          title: "AI & Automation",
          list: [
            "Chatbots",
            "LLMs",
            "RAG",
            "LangChain",
            "LiteLLM",
            "OpenRouter",
            "n8n",
            "Make",
          ],
        },
        {
          title: "Cloud & Infrastructure",
          list: [
            "AWS (ECS, EC2, Lambda, RDS, S3, SQS)",
            "Docker",
            "Git",
            "GitHub Actions",
            "CI/CD",
          ],
        },
        {
          title: "Data & Messaging",
          list: [
            "MariaDB",
            "MySQL",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "AmazonMQ",
            "MongoDB",
          ],
        },
      ],
    },
  ],
  footer: {
    text: `${new Date().getFullYear()} Leandro César`,
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
  ui: {
    resume: "Resume",
    viewResume: "Resume",
    skip: "Skip to content",
    navigation: "Main navigation",
    preferences: "Preferences and commands",
    theme: "Theme",
    light: "Use light theme",
    dark: "Use dark theme",
    commands: "Commands",
    search: "Search pages, actions or profiles…",
    searchLabel: "Search commands",
    results: "Results",
    noResults: "No commands found. Try “theme”, “PDF” or “GitHub”.",
    navigate: "Navigate",
    open: "Open",
    close: "Close",
    or: "or",
    navigationGroup: "Navigation",
    settingsGroup: "Appearance and language",
    profilesGroup: "Contact and profiles",
    headline: "Tech Lead & Engineer",
    specialization: "Backend · AI · Automation",
    photo: "Enlarge photo of Leandro César",
    photoTitle: "Photo of Leandro César",
    pdf: "Save PDF",
    printFallback: "You can also use your browser’s Print option to save the resume as a PDF.",
    copyEmail: "Copy email",
    emailCopied: "Email copied",
    emailCopyError: "Unable to copy email",
    contents: "In this resume",
  },
};

export default en;
