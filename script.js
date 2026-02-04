// Navegação mobile
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Fecha menu ao clicar em um link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

// Ano automático no rodapé
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Lista de projetos
const projects = [
  {
    titleKey: 'project0_title',
    metaKey: 'project0_meta',
    descriptionKey: 'project0_description',
    tags: ['Python', 'Flask', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'CRUD'],
    repoUrl: 'https://github.com/cdiasbrasilio/real_estate_broker',
    highlightKey: 'project0_highlight',
  },
  {
    titleKey: 'project1_title',
    metaKey: 'project1_meta',
    descriptionKey: 'project1_description',
    tags: ['Python', 'Probabilidade', 'Simulação', 'Lógica de Programação', 'Funções', 'CLI'],
    repoUrl: 'https://github.com/cdiasbrasilio/war_game_simulator',
    highlightKey: 'project1_highlight',
  },
  {
    titleKey: 'project2_title',
    metaKey: 'project2_meta',
    descriptionKey: 'project2_description',
    tags: ['C', 'Strucs', 'Ponteiros', 'Ficheiros/Arquivos', 'CRUD', 'Modularização', 'Lógica de Programação', 'CLI'],
    repoUrl: 'https://github.com/cdiasbrasilio/StudentRegistrationManagementSystem',
    highlightKey: 'project2_highlight',
  },
  {
    titleKey: 'project3_title',
    metaKey: 'project3_meta',
    descriptionKey: 'project3_description',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    repoUrl: 'https://github.com/seu-usuario/portfolio',
    highlightKey: 'project3_highlight',
  },
];

// Função para criar o HTML dos projetos
function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = '';

  projects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';

    card.innerHTML = `
      <div>
        <div class="project-meta">${project.meta}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${project.tags
        .map(tag => `<span class="project-tag">${tag}</span>`)
        .join('')}
        </div>
        <div class="project-links">
          ${project.liveUrl
        ? `<a href="${project.liveUrl}" class="project-link" target="_blank" rel="noreferrer">
                  <span>Ver projeto</span>
                  <span>↗</span>
                </a>`
        : ''
      }
          ${project.repoUrl
        ? `<a href="${project.repoUrl}" class="project-link" target="_blank" rel="noreferrer">
                  <span data-translate="projectsGitHubLink">Código no GitHub</span>
                  <span>↗</span>
                </a>`
        : ''
      }
        </div>
      </div>
      <div class="project-right">
        <p class="project-highlight">${project.highlight}</p>
      </div>
    `;

    projectsGrid.appendChild(card);
  });
}
renderProjects();

// Alternar idioma
let currentLang = "pt";

const translations = {
  pt: {
    navAbout: "Sobre",
    navProjects: "Projetos",
    navSkills: "Skills",
    navContact: "Contato",

    heroTag: "Desenvolvedor de Software Full Stack • Com enfâse em Python, JavaScript, C e SQL",
    heroTitle: "Olá, eu sou <span class='highlight'>Cristiano Brasilio</span>.",
    heroSubtitle: "Apaixonado por tecnologia e em constante evolução técnica. Unindo a minha experiência em liderança e operações à engenharia de software, foco-me na criação de aplicações web escaláveise orientadas a resultados. Desenvolvo soluções robustas explorando diversas stacks, sempre com o objetivo de aliar eficiência técnica a valor de negócio.",
    btnProjects: "Ver projetos",
    btnContact: "Entrar em contato",
    heroAvailable: "Disponível para oportunidades.",

    cardLocationTitle: "Baseado em",
    cardLocationText: "Lisboa, Portugal",
    cardExpTitle: "Experiência",
    cardExpText: "1 Ano de Desenvolvimento Full Stack e Dados",
    cardStackTitle: "Stack principal",
    cardLearningTitle: "Stack em Aprendizado",

    aboutTitle: "Sobre mim",
    aboutP1: "Sou um profissional com uma trajetória de carreira marcada pela transição estratégica da Engenharia Civil e Gestão de Operações para o desenvolvimento de software. Atualmente, estou cursando uma graduação em Análise e Desenvolvimento de Sistemas, combinando uma mentalidade analítica específica com a capacidade de entregar soluções tecnológicas que geram impacto direto nos negócios.",
    aboutP2: "Ao longo da minha carreira, especializei-me em transformar desafios operacionais em eficiência através do código e de dados. Como Station Manager na Drivalia, liderei equipas focadas em resultados, onde implementei sistemas de monitorização em Power BI que garantiram uma precisão de inventário superior a 98%. Na Synergies, desenvolvi autonomamente uma ferramenta em Python e Flask para automatizar o acompanhamento de contratos da Gold Energy, o que resultou num aumento de 15% na taxa de fecho de novos negócios.",
    aboutP3: "No que diz respeito a competências técnicas e resultados, possuo experiência sólida no desenvolvimento de aplicações Full Stack, tendo construído uma plataforma de E-commerce completa com React e Flask focada em escalabilidade e experiência do utilizador (UX). Complemento este perfil com competências em automação e dados, incluindo o uso prático de SQL e PostgreSQL para estruturar sistemas que gerem volumes de dados superiores a 5000 utilizadores, e uma elevada adaptabilidade cultural apoiada pela fluência em Inglês (C1), o que me permite colaborar eficazmente em ambientes internacionais e articular soluções com stakeholders técnicos e comerciais.",
    aboutP4: "Minha motivação reside em aplicar o rigor da engenharia para desenvolver softwares que não apenas funcionem, mas que otimizem processos e impulsionem a produtividade das organizações.",

    projectsTitle: "Projetos em destaque",
    projectsSubtitle: "Projetos que refletem minha evolução como desenvolvedor, explorando lógica de programação, estruturas de software e aplicações web.",
    projectsGitHubLink: "Código no GitHub",

    skillsTitle: "Skills",
    skillsFrontend: "Front-end",
    skillsFullStack: "Full Stack",
    skillsTools: "Ferramentas",
    skillsOther: "Outros",

    skillsBestPractices: "Boas práticas de UI/UX",
    skillsAccessibility: "Acessibilidade básica",
    skillsPerformance: "Performance básica de front-end",
    skillsTeamwork: "Trabalho em equipe e comunicação",

    contactTitle: "Contato",
    contactText: "Curtiu meu trabalho ou quer conversar sobre alguma oportunidade? Ficarei feliz em falar com você.",
    contactEmail: "Email:",
    contactLinkedin: "LinkedIn:",
    contactGithub: "GitHub:",

    footerRights: "© Cristiano Brasilio. Todos os direitos reservados.",
    footerBuilt: "Construído com HTML, CSS e JavaScript.",

    project0_title: "Sistema de Imobiliária",
    project0_meta: "Projeto pessoal • 2025",
    project0_description: "Sistema web para gestão de imóveis e corretagem, com cadastro de clientes, imóveis e controle administrativo.",
    project0_highlight: "Gestão completa de imóveis e clientes. Melhorou minha lógica de programação, em Python com uso de framework Flask, além de integração com Banco de Dados",

    project1_title: "Simulador do jogo War em Python",
    project1_meta: "Projeto pessoal • 2025",
    project1_description: "Simulador de batalha desenvolvido em Python que utiliza lógica probabilística para determinar o resultado de confrontos entre exércitos. O sistema permite configurar tropas, forças e cenários, executando múltiplas simulações para analisar vitórias, derrotas e estatísticas gerais. O projeto reforça conceitos de programação estruturada, funções, aleatoriedade e modelagem de comportamentos.",
    project1_highlight: "Projeto que fortaleceu minha lógica de programação e o uso de funções e simulações probabilísticas em Python.",

    project2_title: "Software de Gestão de Estudantes",
    project2_meta: "Projeto pessoal • 2025",
    project2_description: "Aplicação em C para gerenciamento de estudantes, implementada com estruturas, ponteiros e operações de leitura/escrita em ficheiros. O sistema inclui funcionalidades de CRUD completas, validação de entradas e organização modular do código, consolidando conhecimentos essenciais de programação estruturada e manipulação de dados persistentes.",
    project2_highlight: "Projeto que consolidou conceitos fundamentais de C, estruturas, ponteiros e manipulação de ficheiros.",

    project3_title: "Portfolio Pessoal",
    project3_meta: "Projeto pessoal • 2025",
    project3_description: "Este próprio site, construído para ser simples de manter, rápido e de fácil leitura.",
    project3_highlight: "Priorizei acessibilidade básica, tipografia e hierarquia visual.",
  },

  en: {
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",

    heroTag: "Full Stack Software Developer • With emphasis on Python, JavaScript, C, and SQL",
    heroTitle: "Hello, I'm <span class='highlight'>Cristiano Brasilio</span>.",
    heroSubtitle: "Passionate about technology and constantly evolving technically. Combining my experience in leadership and operations with software engineering, I focus on creating scalable and results-oriented web applications. I develop robust solutions exploring diverse stacks, always with the goal of combining technical efficiency with business value.",
    btnProjects: "View projects",
    btnContact: "Get in touch",
    heroAvailable: "Available for opportunities.",

    cardLocationTitle: "Based in",
    cardLocationText: "Lisbon, Portugal",
    cardExpTitle: "Experience",
    cardExpText: "1 Year of Full Stack Development and Data",
    cardStackTitle: "Main stack",
    cardLearningTitle: "Learning stack",

    aboutTitle: "About me",
    aboutP1: "I am a professional with a career path marked by the strategic transition from Civil Engineering and Operations Management to software development. Currently, I am pursuing a degree in Systems Analysis and Development, combining a specific analytical mindset with the ability to deliver technological solutions that generate a direct impact on the business.",
    aboutP2: "Throughout my career, I have specialized in transforming operational challenges into efficiencies through code and data. As Station Manager at Drivalia, I led results-oriented teams, where I implemented Power BI monitoring systems that ensured inventory accuracy exceeding 98%. At Synergies, I independently developed a tool in Python and Flask to automate contract tracking for Gold Energy, resulting in a 15% increase in new business closing rates.",
    aboutP3: "Regarding technical skills and results, I possess solid experience in developing Full Stack applications, having built a complete E-commerce platform with React and Flask focused on scalability and user experience (UX). I complement this profile with skills in automation and data, including the practical use of SQL and PostgreSQL to structure systems that manage data volumes exceeding 5000 users, and a high level of cultural adaptability supported by fluency in English (C1), which allows me to collaborate effectively in international environments and articulate solutions with technical and commercial stakeholders.",
    aboutP4: "My motivation lies in applying the rigor of engineering to develop software that not only works, but also optimizes processes and boosts the productivity of organizations.",

    projectsTitle: "Featured projects",
    projectsSubtitle: "Projects that reflect my evolution as a developer, exploring programming logic, software structures and web applications.",
    projectsGitHubLink: "Code on GitHub",

    skillsTitle: "Skills",
    skillsFullStack: "Full Stack",
    skillsTools: "Tools",
    skillsOther: "Other",

    skillsBestPractices: "UI/UX best practices",
    skillsAccessibility: "Basic accessibility",
    skillsPerformance: "Basic front-end performance",
    skillsTeamwork: "Teamwork and communication",

    contactTitle: "Contact",
    contactText: "Liked my work or want to talk about an opportunity? I’ll be happy to talk to you.",
    contactEmail: "Email:",
    contactLinkedin: "LinkedIn:",
    contactGithub: "GitHub:",

    footerRights: "© Cristiano Brasilio. All rights reserved.",
    footerBuilt: "Built with HTML, CSS and JavaScript.",

    project0_title: "Real Estate System",
    project0_meta: "Personal project • 2025",
    project0_description: "Web system for property management and brokerage, with client registration, properties, and administrative control.",
    project0_highlight: "Complete management of properties and clients. Improved my programming logic in Python using the Flask framework, as well as integration with a Database",
    
    project1_title: "War Game Simulator in Python",
    project1_meta: "Personal project • 2025",
    project1_description: "Battle simulator developed in Python using probabilistic logic to determine the outcome of army confrontations. The system allows configuring troops, strengths and scenarios, running multiple simulations to analyze wins, losses and general statistics. The project reinforces structured programming, functions, randomness and behavior modeling.",
    project1_highlight: "Project that strengthened my programming logic and the use of functions and probabilistic simulations in Python.",

    project2_title: "Student Management Software",
    project2_meta: "Personal project • 2025",
    project2_description: "C application for student management, implemented with structs, pointers and file read/write operations. The system includes full CRUD features, input validation and modular code organization, consolidating essential concepts of structured programming and persistent data handling.",
    project2_highlight: "Project that consolidated fundamental concepts of C, structs, pointers and file manipulation.",

    project3_title: "Personal Portfolio",
    project3_meta: "Personal project • 2025",
    project3_description: "This very website, built to be simple to maintain, fast and easy to read.",
    project3_highlight: "I prioritized basic accessibility, typography and visual hierarchy.",
  }
};

function loadProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  projects.forEach(p => {
    grid.innerHTML += `
      <div class="project-card">
        <h3>${translations[currentLang][p.titleKey]}</h3>
        <p class="project-meta">${translations[currentLang][p.metaKey]}</p>
        <p>${translations[currentLang][p.descriptionKey]}</p>
        <p class="project-highlight">${translations[currentLang][p.highlightKey]}</p>

        <div class="project-tags">
          ${p.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
        </div>

        <div class="project-links">
        <a href="${p.repoUrl}" class="project-link" target="_blank" rel="noreferrer">
          <span>${translations[currentLang].projectsGitHubLink}</span>
          <span>↗</span>
        </a>
        </div>
      </div>
    `;
  });
}

function changeLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    el.innerHTML = translations[lang][key];
  });

  loadProjects();

  // Mostra a bandeira do idioma para o qual vai mudar
  document.getElementById("lang-toggle").textContent =
    lang === "pt" ? "🇺🇸" : "🇵🇹";
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  const newLang = currentLang === "pt" ? "en" : "pt";
  changeLanguage(newLang);
});

document.addEventListener("DOMContentLoaded", () => {
  changeLanguage(currentLang);
});
