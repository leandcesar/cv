import { Content } from "@/types/content";

export const pt: Content = {
  name: "Leandro César",
  role: "Engenheiro. Desenvolvedor. Líder.",
  description:
    "Currículo de Leandro César. Líder técnico, desenvolvedor backend, especialista em automações e soluções com Inteligência Artificial.",
  keywords: ["Leandro César"],
  site: "https://github.com/leandcesar",
  about: {
    label: "Sobre",
    value:
      "Profissional experiente com sólida atuação em liderança técnica, desenvolvimento backend, inteligência artificial e automações. Conduz projetos de alta performance com foco estratégico, integrando sistemas de forma eficiente, otimizando processos e gerenciando infraestrutura. Perfil analítico, orientado a resultados e altamente organizado, com comprovada habilidade em formar equipes, padronizar fluxos de trabalho e garantir entregas de alta qualidade.",
  },
  experiences: {
    label: "Experiências",
    value: [
      {
        title: "Líder Técnico",
        company: "Cloudiabot",
        period: "Jan de 2022 - Presente",
        description: "",  // TODO: add description
        url: "https://www.cloudia.com.br/",
      },
      {
        title: "Desenvolvedor Python",
        company: "Cloudiabot",
        period: "Jan de 2021 - Dez de 2021",
        description: "",  // TODO: add description
        url: "https://www.cloudia.com.br/",
      },
      {
        title: "Consultor Aprendiz",
        company: "BASF",
        period: "Jul de 2019 - Dez de 2019",
        description: "",  // TODO: add description
        url: "https://www.basf.com/br/pt",
      },
      {
        title: "Consultor Aprendiz",
        company: "Ball Corporation",
        period: "Fev de 2019 - Jun de 2019",
        description: "",  // TODO: add description
        url: "https://www.ball.com/sa",
      },
      {
        title: "Líder Técnico",
        company: "Ex Machina UNIFEI",
        period: "Fev de 2019 - Jun de 2019",
        description: "",  // TODO: add description
        url: "https://proex.unifei.edu.br/extensao-tecnologica-e-empresarial/competicao-tecnologica/ex-machina/",
      },
    ],
  },
  education: {
    label: "Formação",
    value: [
      {
        title: "Graduação em Engenharia de Controle e Automação",
        institution: "UNIFEI (Universidade Federal de Itajubá)",
        period: "Jan de 2016 - Dez de 2020",
        description: "",  // TODO: add description
        url: "https://www.unifei.edu.br/",
      },
    ],
  },
  projects: {
    label: "Projetos",
    value: [
      {
        title: "Peak Detection",
        description:
          "Biblioteca Arduino para detecção de pico em tempo real com z-score.",
        url: "https://github.com/leandcesar/PeakDetection",
      },
    ],  // TODO: add more projects
  },
  skills: {
    label: "Habilidades",
    value: [
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
  languages: {
    label: "Idiomas",
    value: [
      {
        language: "Português",
        level: "Nativo",
      },
      {
        language: "Inglês",
        level: "Avançado",
      },
    ],
  },
  contact: {
    label: "Contato",
    value: "E-mail: ccleandroc@gmail.com",
  },
  source: {
    label: "Código fonte",
    value: "https://github.com/leandcesar/resume",
  },
  actions: {
    label: "Pressione",
    value: [
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
  },
};

export default pt;
