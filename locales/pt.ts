import { LocalizedContent } from "@/types/content";

export const pt: LocalizedContent = {
  header: {
    title: "Leandro César",
  },
  resumeButton: "Currículo",
  sections: [
    {
      id: "about",
      section: "Sobre",
      paragraph: [
        {
          description:
            "Sou Tech Lead e engenheiro backend. Lidero equipes sem me afastar da implementação. Trabalho com IA, automações e sistemas para aplicações conversacionais, da arquitetura à produção. Gosto especialmente de reduzir custos e otimizar performance — curioso já que escolhi Python como linguagem principal.",
        },
      ],
    },
    {
      id: "contact",
      section: "Contato",
      paragraph: [{ description: "E-mail: ccleandroc@gmail.com" }],
    },
    {
      id: "experience",
      section: "Experiências",
      paragraph: [
        {
          title: "Cloudia",
          brand: "cloudia",
          subtitle: "Tech Lead",
          titleUrl: "https://www.cloudia.com.br/",
          description:
            "Lidero uma equipe de 6 desenvolvedores, gerenciando prioridades, entregas e execução técnica, além de contribuir para decisões de produto e arquitetura. Desenvolvo um chatbot com IA para WhatsApp, Facebook e Instagram, integrado a mais de 30 APIs de agendamento. Sou responsável pela infraestrutura AWS, CI/CD, automações, ferramentas internas, qualidade de código, observabilidade e otimização de performance.",
          period: "Fev de 2022 - Presente",
          startDate: "2022-02",
        },
        {
          subtitle: "Desenvolvedor de Software",
          period: "Jun de 2021 - Fev de 2022",
          startDate: "2021-06",
          endDate: "2022-02",
        },
        {
          subtitle: "Estagiário em Desenvolvimento de Software",
          period: "Jan de 2021 - Jun de 2021",
          startDate: "2021-01",
          endDate: "2021-06",
        },
        {
          title: "BASF",
          brand: "basf",
          subtitle: "Consultor (Aprendiz)",
          titleUrl: "https://www.basf.com/br/pt",
          period: "Ago de 2019 - Nov de 2019",
          startDate: "2019-08",
          endDate: "2019-11",
        },
        {
          title: "UNIFEI (Universidade Federal de Itajubá)",
          brand: "unifei",
          subtitle: "Bolsista de Pesquisa (Laboratório de Física)",
          titleUrl: "https://unifei.edu.br/",
          period: "Jul de 2019 - Nov de 2019",
          startDate: "2019-07",
          endDate: "2019-11",
        },
        {
          title: "Ball Corporation",
          brand: "ball-corporation",
          subtitle: "Consultor (Aprendiz)",
          titleUrl: "https://www.ball.com/sa",
          period: "Mar de 2019 - Jun de 2019",
          startDate: "2019-03",
          endDate: "2019-06",
        },
        {
          title: "Ex Machina",
          brand: "ex-machina",
          subtitle: "Diretor Técnico",
          titleUrl:
            "https://proex.unifei.edu.br/extensao-tecnologica-e-empresarial/competicao-tecnologica/ex-machina/",
          period: "Jul de 2018 - Mai de 2019",
          startDate: "2018-07",
          endDate: "2019-05",
        },
        {
          subtitle: "Diretor de Programação",
          period: "Jul de 2017 - Jul de 2018",
          startDate: "2017-07",
          endDate: "2018-07",
        },
        {
          subtitle: "Programador",
          period: "Mar de 2017 - Jul de 2017",
          startDate: "2017-03",
          endDate: "2017-07",
        },
      ],
    },
    {
      id: "education",
      section: "Formação",
      paragraph: [
        {
          title: "UNIFEI (Universidade Federal de Itajubá)",
          brand: "unifei",
          subtitle: "Graduação em Engenharia de Controle e Automação",
          titleUrl: "https://unifei.edu.br/",
          period: "Jan de 2016 - Dez de 2020",
          startDate: "2016-01",
          endDate: "2020-12",
        },
      ],
    },
    {
      id: "languages",
      section: "Idiomas",
      paragraph: [{ list: ["Português - Nativo", "Inglês - Avançado"] }],
    },
    {
      id: "projects",
      section: "Projetos",
      paragraph: [
        {
          title: "themoviedb",
          brand: "themoviedb",
          titleUrl: "https://pypi.org/project/themoviedb",
          description: "Cliente Python tipado para a API do TMDb, com interfaces síncrona e assíncrona. Distribuído pelo PyPI para dados de filmes e séries em Python 3.8-3.14.",
        },
        {
          title: "PeakDetection",
          brand: "peak-detection",
          titleUrl: "https://github.com/leandcesar/PeakDetection",
          description: "Detecção de picos em tempo real para dados no Arduino. Análise por z-score e médias móveis para processamento de sinais em hardware limitado.",
        },
        {
          title: "Enhancer for Letterboxd",
          brand: "enhancer-for-letterboxd",
          titleUrl: "https://enhancer-for-letterboxd.vercel.app/",
          description: "Extensão que transforma o Letterboxd em uma ferramenta de análise e descoberta. Filtros, avaliações, estatísticas e descoberta de filmes.",
        },
        {
          title: "onthisday.watch",
          brand: "onthisday-watch",
          titleUrl: "https://onthisday.watch/",
          description: "Descoberta de filmes orientada pela data para responder “O que devo assistir hoje?”. Usa o dia atual para destacar recomendações relevantes de filmes.",
        },
      ],
    },
    {
      id: "volunteering",
      section: "Voluntariado",
      paragraph: [
        {
          title: "Bota Pra Fazer UNIFEI 2018",
          brand: "unifei",
          titleUrl: "https://www.instagram.com/botaprafazerunifei/",
          description:
            "Criação de uma horta orgânica no Lar da Providência de Itajubá para auxiliar a instituição no cultivo de alimentos para os idosos.",
        },
        {
          title: "Bota Pra Fazer UNIFEI 2017",
          brand: "unifei",
          titleUrl: "https://www.instagram.com/botaprafazerunifei/",
          description:
            "Desenvolvimento de um jogo matemático para crianças da APAE de Itajubá, facilitando o aprendizado do sistema de numeração decimal-posicional. A iniciativa foi premiada em 1º lugar na categoria Inovação e Criatividade.",
        },
      ],
    },
    {
      id: "skills",
      section: "Especialidades",
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
          title: "IA e Automações",
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
          title: "Cloud e Infraestrutura",
          list: [
            "AWS (ECS, EC2, Lambda, RDS, S3, SQS)",
            "Docker",
            "Git",
            "GitHub Actions",
            "CI/CD",
          ],
        },
        {
          title: "Dados e Mensageria",
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
      name: "Currículo",
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
    // {
    //   type: "Facebook",
    //   section: "Redes Sociais",
    //   keywords: "social media facebook fb",
    //   url: "https://facebook.com/leandcesar",
    // },
    // {
    //   type: "Threads",
    //   section: "Redes Sociais",
    //   keywords: "social media threads th",
    //   url: "https://threads.com/@leandcesar",
    // },
    {
      type: "X",
      section: "Redes Sociais",
      keywords: "social media x twitter tt",
      url: "https://x.com/leandcesar",
    },
  ],
  ui: {
    resume: "Currículo",
    viewResume: "Currículo",
    skip: "Pular para o conteúdo",
    navigation: "Navegação principal",
    preferences: "Preferências e comandos",
    theme: "Tema",
    light: "Usar tema claro",
    dark: "Usar tema escuro",
    commands: "Comandos",
    search: "Buscar páginas, ações ou perfis…",
    searchLabel: "Buscar comandos",
    results: "Resultados",
    noResults: "Nenhum comando encontrado. Tente “tema”, “PDF” ou “GitHub”.",
    navigate: "Navegar",
    open: "Abrir",
    close: "Fechar",
    or: "ou",
    navigationGroup: "Navegação",
    settingsGroup: "Aparência e idioma",
    profilesGroup: "Contato e perfis",
    headline: "Tech Lead e Engenheiro",
    specialization: "Backend · IA · Automações",
    source: "Código fonte",
    photo: "Ampliar foto de Leandro César",
    photoTitle: "Foto de Leandro César",
    pdf: "Salvar PDF",
    printFallback: "Você também pode usar a opção Imprimir do navegador para salvar o currículo em PDF.",
    copyEmail: "Copiar e-mail",
    emailCopied: "E-mail copiado",
    emailCopyError: "Não foi possível copiar o e-mail",
    contents: "Neste currículo",
    backTop: "Voltar ao topo",
  },
};

export default pt;
