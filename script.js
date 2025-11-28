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
                  <span>Código no GitHub</span>
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

    heroTag: "Desenvolvedor Full Stack • Web • Software",
    heroTitle: "Olá, eu sou <span class='highlight'>Cristiano Brasilio</span>.",
    heroSubtitle: "Apaixonado por tecnologia e aprendizagem contínua, estou a construir a minha trajetória como desenvolvedor explorando diferentes áreas da programação.",
    btnProjects: "Ver projetos",
    btnContact: "Entrar em contato",
    heroAvailable: "Disponível para oportunidades.",

    cardLocationTitle: "Baseado em",
    cardLocationText: "Lisboa, Portugal",
    cardExpTitle: "Experiência",
    cardExpText: "1 ano em desenvolvimento full stack, web e software",
    cardStackTitle: "Stack principal",
    cardLearningTitle: "Stack em Aprendizado",

    aboutTitle: "Sobre mim",
    aboutP1: "Sou estudante de Análise e Desenvolvimento de Sistemas e estou a iniciar a minha carreira na área de Tecnologia, desenvolvendo projetos práticos em programação, web development e bases de dados. A tecnologia sempre me fascinou — especialmente a forma como soluções digitais conseguem resolver problemas reais, melhorar processos e aproximar pessoas.",
    aboutP2: "Embora esteja no começo da minha trajetória técnica, trago comigo uma experiência profissional sólida em liderança, operações e gestão de resultados, adquirida ao longo de vários anos em ambientes exigentes. Atuei como Station Manager, supervisor comercial e agente administrativo, sempre com foco em organização, eficiência, comunicação clara e tomada de decisão.",
    aboutP3: "Hoje, aplico essa maturidade profissional no meu desenvolvimento como programador. Tenho facilidade em aprender novas ferramentas, gosto genuíno por tecnologia e estou constantemente a construir projetos que combinam lógica, criatividade e boas práticas. Estou a explorar diferentes áreas — desde desenvolvimento web até software e bases de dados — para encontrar o caminho onde posso gerar mais impacto.",
    aboutP4: "Procuro oportunidades que valorizem determinação, responsabilidade e vontade de evoluir. Acredito no poder da aprendizagem contínua e estou comprometido em construir uma carreira sólida, contribuindo para equipas que buscam inovação, qualidade e crescimento.",

    projectsTitle: "Projetos em destaque",
    projectsSubtitle: "Projetos que refletem minha evolução como desenvolvedor, explorando lógica de programação, estruturas de software e aplicações web.",

    skillsTitle: "Skills",
    skillsFrontend: "Front-end",
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

    heroTag: "Full Stack Developer • Web • Software",
    heroTitle: "Hello, I'm <span class='highlight'>Cristiano Brasilio</span>.",
    heroSubtitle: "Passionate about technology and continuous learning, I am building my journey as a developer while exploring different areas of programming.",
    btnProjects: "View projects",
    btnContact: "Get in touch",
    heroAvailable: "Available for opportunities.",

    cardLocationTitle: "Based in",
    cardLocationText: "Lisbon, Portugal",
    cardExpTitle: "Experience",
    cardExpText: "1 year in full stack, web and software development",
    cardStackTitle: "Main stack",
    cardLearningTitle: "Learning stack",

    aboutTitle: "About me",
    aboutP1: "I am a Systems Analysis and Development student, and I am beginning my career in the Technology field, developing practical projects in programming, web development, and databases. Technology has always fascinated me — especially the way digital solutions can solve real problems, improve processes, and bring people closer together.",
    aboutP2: "Although I am at the beginning of my technical journey, I bring with me solid professional experience in leadership, operations, and performance management, gained over several years in demanding environments. I have worked as a Station Manager, commercial supervisor, and administrative agent, always with a focus on organization, efficiency, clear communication, and decision-making.",
    aboutP3: "Today, I apply this professional maturity to my development as a programmer. I learn new tools easily, have a genuine passion for technology, and am constantly building projects that combine logic, creativity, and best practices. I am exploring different areas — from web development to software and databases — to find the path where I can create the greatest impact.",
    aboutP4: "I am looking for opportunities that value determination, responsibility, and the desire to grow. I believe in the power of continuous learning and am committed to building a solid career, contributing to teams that strive for innovation, quality, and growth.",

    projectsTitle: "Featured projects",
    projectsSubtitle: "Projects that reflect my evolution as a developer, exploring programming logic, software structures and web applications.",

    skillsTitle: "Skills",
    skillsFrontend: "Front-end",
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
            <span>Código no GitHub</span>
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
    lang === "pt" ? "🇺🇸" : "🇧🇷";
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  const newLang = currentLang === "pt" ? "en" : "pt";
  changeLanguage(newLang);
});

document.addEventListener("DOMContentLoaded", () => {
  changeLanguage(currentLang);
});
