import { Content } from "@/types/content";

export const pt: Content = {
  header: {
    title: "Leandro César",
    subtitle: "Engenheiro. Desenvolvedor. Líder.",
  },
  resumeButton: "Ver currículo",
  homeButton: "Voltar ao início",
  sections: [
    {
      section: "Sobre",
      paragraph: [
        {
          description:
            "Profissional experiente com sólida atuação em liderança técnica, desenvolvimento backend, inteligência artificial e automações. Conduz projetos de alta performance com foco estratégico, integrando sistemas de forma eficiente, otimizando processos e gerenciando infraestrutura. Perfil analítico, orientado a resultados e organizado, com comprovada habilidade em formar equipes, padronizar fluxos de trabalho e garantir entregas de alta qualidade.",
        },
      ],
    },
    {
      section: "Contato",
      shortcut: "Email",
      paragraph: [{ description: "E-mail: ccleandroc@gmail.com" }],
    },
    {
      section: "Experiências",
      shortcut: "Linkedin",
      paragraph: [
        {
          title: "Cloudia",
          subtitle: "Líder Técnico",
          titleUrl: "https://www.cloudia.com.br/",
          description:
            "Lidera 6 desenvolvedores, gerenciando prioridades, entregas e execução técnica, além de contribuir para decisões de produto e arquitetura. Desenvolve chatbot com IA para WhatsApp, Facebook e Instagram, integrado a 30+ APIs de agendamento. Responsável por AWS, CI/CD, automações, ferramentas internas, qualidade, observabilidade e performance.",
          period: "Fev de 2022 - Presente",
        },
        {
          subtitle: "Desenvolvedor de Software",
          period: "Jun de 2021 - Fev de 2022",
        },
        {
          subtitle: "Estagiário em Desenvolvimento de Software",
          period: "Jan de 2021 - Jun de 2021",
        },
        {
          title: "BASF",
          subtitle: "Consultor (Aprendiz)",
          titleUrl: "https://www.basf.com/br/pt",
          period: "Ago de 2019 - Nov de 2019",
        },
        {
          title: "UNIFEI (Universidade Federal de Itajubá)",
          subtitle: "Bolsista",
          titleUrl: "https://www.unifei.edu.br/",
          period: "Jul de 2019 - Nov de 2019",
        },
        {
          title: "Ball Corporation",
          subtitle: "Consultor (Aprendiz)",
          titleUrl: "https://www.ball.com/sa",
          period: "Mar de 2019 - Jun de 2019",
        },
        {
          title: "Ex Machina UNIFEI",
          subtitle: "Diretor Técnico",
          titleUrl:
            "https://proex.unifei.edu.br/extensao-tecnologica-e-empresarial/competicao-tecnologica/ex-machina/",
          period: "Jul de 2018 - Mai de 2019",
        },
        {
          subtitle: "Diretor de Programação",
          period: "Jul de 2017 - Jul de 2018",
        },
        {
          subtitle: "Programador",
          period: "Mar de 2017 - Jul de 2017",
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
          period: "Jan de 2016 - Dez de 2020",
        },
      ],
    },
    {
      section: "Idiomas",
      shortcut: "Language",
      paragraph: [{ list: ["Português - Nativo", "Inglês - Avançado"] }],
    },
    {
      section: "Projetos",
      shortcut: "Github",
      paragraph: [
        {
          title: "Enhancer for Letterboxd",
          titleUrl: "https://enhancer-for-letterboxd.vercel.app/",
          description:
            "Aprimora a experiência no Letterboxd com recursos adicionais.",
        },
        {
          title: "onthisday.watch",
          titleUrl: "https://onthisday.watch/",
          description: "\"O que devo assistir hoje?\"",
        },
        {
          title: "PeakDetection",
          titleUrl: "https://github.com/leandcesar/PeakDetection",
          description:
            "Biblioteca Arduino para detecção de picos em tempo real em dados usando z-score.",
        },
        {
          title: "themoviedb",
          titleUrl: "https://pypi.org/project/themoviedb",
          description:
            "Wrapper de API em Python para a API v3 do The Movie Database (TMDb).",
        },
      ],
    },
    {
      section: "Voluntariado",
      paragraph: [
        {
          title: "Bota Pra Fazer UNIFEI 2018",
          titleUrl: "https://www.instagram.com/botaprafazerunifei/",
          description:
            "Criação de uma horta orgânica no Lar da Providência de Itajubá para auxiliar a instituição no cultivo de alimentos para os idosos.",
        },
        {
          title: "Bota Pra Fazer UNIFEI 2017",
          titleUrl: "https://www.instagram.com/botaprafazerunifei/",
          description:
            "Desenvolvimento de um jogo matemático para crianças da APAE de Itajubá, facilitando o aprendizado do sistema de numeração decimal-posicional. A iniciativa foi premiada em 1º lugar na categoria Inovação e Criatividade.",
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
            "Git",
            "GitHub",
            "GitHub Actions",
            "CI/CD",
            "Code review",
            "Deploys",
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
      name: "Alternar idioma",
      section: "Configurações",
      keywords: "idioma linguagem language português english inglês",
    },
    {
      type: "Theme",
      name: "Alternar tema",
      section: "Configurações",
      keywords: "tema theme escuro dark claro light mode",
    },
    {
      type: "Resume",
      name: "Ver currículo",
      section: "Navegação",
      keywords: "currículo cv início home página inicial",
    },
    {
      type: "PDF",
      name: "Baixar como PDF",
      section: "Navegação",
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
