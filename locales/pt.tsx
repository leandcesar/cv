import { Content } from "@/types/content";

export const pt: Content = {
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
    subtitle: "Engenheiro. Desenvolvedor. Líder.",
  },
  sections: [
    {
      section: "Sobre",
      paragraph: [
        {
          description:
            "Profissional experiente com sólida atuação em liderança técnica, desenvolvimento backend, inteligência artificial e automações. Conduz projetos de alta performance com foco estratégico, integrando sistemas de forma eficiente, otimizando processos e gerenciando infraestrutura. Perfil analítico, orientado a resultados e altamente organizado, com comprovada habilidade em formar equipes, padronizar fluxos de trabalho e garantir entregas de alta qualidade.",
        },
      ],
    },
    {
      section: "Experiências",
      shortcut: "Linkedin",
      paragraph: [
        {
          title: "Líder Técnico",
          subtitle: "Cloudiabot",
          subtitleUrl: "https://www.cloudia.com.br/",
          description: "",
          period: "Jan de 2022 - Presente",
        },
        {
          title: "Desenvolvedor Python",
          subtitle: "Cloudiabot",
          subtitleUrl: "https://www.cloudia.com.br/",
          description: "",
          period: "Jan de 2021 - Dez de 2021",
        },
        {
          title: "Consultor Aprendiz",
          subtitle: "BASF",
          subtitleUrl: "https://www.basf.com/br/pt",
          description: "",
          period: "Jul de 2019 - Dez de 2019",
        },
        {
          title: "Consultor Aprendiz",
          subtitle: "Ball Corporation",
          subtitleUrl: "https://www.ball.com/sa",
          description: "",
          period: "Fev de 2019 - Jun de 2019",
        },
        {
          title: "Líder Técnico",
          subtitle: "Ex Machina UNIFEI",
          subtitleUrl:
            "https://proex.unifei.edu.br/extensao-tecnologica-e-empresarial/competicao-tecnologica/ex-machina/",
          description: "",
          period: "Mar de 2017 - Dez de 2019",
        },
      ],
    },
    {
      section: "Formação",
      paragraph: [
        {
          title: "Graduação em Engenharia de Controle e Automação",
          subtitle: "UNIFEI (Universidade Federal de Itajubá)",
          subtitleUrl: "https://www.unifei.edu.br/",
          description: "",
          period: "Jan de 2016 - Dez de 2020",
        },
      ],
    },
    {
      section: "Projetos",
      shortcut: "Github",
      paragraph: [
        {
          title: "Peak Detection",
          titleUrl: "https://github.com/leandcesar/PeakDetection",
          description:
            "Biblioteca Arduino para detecção de pico em tempo real com z-score.",
        },
      ],
    },
    {
      section: "Habilidades",
      paragraph: [
        {
          list: [
            "Backend",
            "Inteligência Artificial",
            "Automações",
            "LLM",
            "Chatbots",
            "Computação em nuvem",
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
      section: "Idiomas",
      shortcut: "Language",
      paragraph: [{ list: ["Português - Nativo", "Inglês - Avançado"] }],
    },
    {
      section: "Contato",
      shortcut: "Email",
      paragraph: [{ description: "E-mail: ccleandroc@gmail.com" }],
    },
  ],
  footer: {
    text: `${new Date().getFullYear()} © Leandro César`,
    url: "https://github.com/leandcesar/cv",
  },
  actions: [
    {
      type: "Theme",
      name: "Alternar tema",
      section: "Configurações",
      keywords: "tema theme escuro dark claro light mode",
    },
    {
      type: "Language",
      name: "Alternar idioma",
      section: "Configurações",
      keywords: "idioma linguagem language português english inglês",
    },
    {
      type: "PDF",
      name: "Baixar como PDF",
      section: "Baixar",
      keywords: "pdf download cv resume",
    },
    {
      type: "Email",
      section: "Contato",
      keywords: "email mail gmail contact e",
      url: "mailto:ccleandroc@gmail.com",
    },
    {
      type: "Linkedin",
      section: "Contato",
      keywords: "social media linkedin",
      url: "https://linkedin.com/in/leandcesar",
    },
    {
      type: "Github",
      section: "Redes Sociais",
      keywords: "git github gh",
      url: "https://github.com/leandcesar",
    },
    {
      type: "Instagram",
      section: "Redes Sociais",
      keywords: "social media instagram ig",
      url: "https://instagram.com/leandcesar",
    },
    {
      type: "Facebook",
      section: "Redes Sociais",
      keywords: "social media facebook fb",
      url: "https://facebook.com/leandcesar",
    },
    {
      type: "Threads",
      section: "Redes Sociais",
      keywords: "social media threads th",
      url: "https://threads.com/@leandcesar",
    },
    {
      type: "X",
      section: "Redes Sociais",
      keywords: "social media x twitter tt",
      url: "https://x.com/leandcesar",
    },
  ],
};

export default pt;
