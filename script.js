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
    tags: ['Python', 'Flask', 'PostgreSQL', 'Bootstrap', 'CRUD'],
    repoUrl: 'https://github.com/cdiasbrasilio/',
    highlightKey: 'project0_highlight',
  },
  {
    titleKey: 'project1_title',
    metaKey: 'project1_meta',
    descriptionKey: 'project1_description',
    tags: ['Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'CRUD'],
    repoUrl: 'https://github.com/cdiasbrasilio',
    highlightKey: 'project1_highlight',
  },
  {
    titleKey: 'project2_title',
    metaKey: 'project2_meta',
    descriptionKey: 'project2_description',
    tags: ['C', 'Python', 'Algorithms', 'Strucs', 'Pointers', 'Modularization', 'Programming Logic'],
    repoUrl: 'https://github.com/cdiasbrasilio',
    highlightKey: 'project2_highlight',
  },
  {
    titleKey: 'project3_title',
    metaKey: 'project3_meta',
    descriptionKey: 'project3_description',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    repoUrl: 'https://github.com/cdiasbrasilio/web_portifolio',
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
    cardStackTitle: "Principais Stacks",

    aboutTitle: "Sobre mim",
    aboutP1: "Sou um profissional com uma trajetória de carreira marcada pela transição estratégica da Engenharia Civil e Gestão de Operações para o desenvolvimento de software. Atualmente, estou cursando uma graduação em Análise e Desenvolvimento de Sistemas, combinando uma mentalidade analítica específica com a capacidade de entregar soluções tecnológicas que geram impacto direto nos negócios.",
    aboutP2: "Ao longo da minha carreira, especializei-me em transformar desafios operacionais em eficiência através do código e de dados. Como Station Manager na Drivalia, liderei equipas focadas em resultados, onde implementei sistemas de monitorização em Power BI que garantiram uma precisão de inventário superior a 98%. Na Synergies, desenvolvi autonomamente uma ferramenta em Python e Flask para automatizar o acompanhamento de contratos da Gold Energy, o que resultou num aumento de 15% na taxa de fecho de novos negócios.",
    aboutP3: "No que diz respeito a competências técnicas e resultados, possuo experiência sólida no desenvolvimento de aplicações Full Stack, tendo construído uma plataforma de E-commerce completa com React e Flask focada em escalabilidade e experiência do utilizador (UX). Complemento este perfil com competências em automação e dados, incluindo o uso prático de SQL e PostgreSQL para estruturar sistemas que gerem volumes de dados superiores a 5000 utilizadores, e uma elevada adaptabilidade cultural apoiada pela fluência em Inglês (C1), o que me permite colaborar eficazmente em ambientes internacionais e articular soluções com stakeholders técnicos e comerciais.",
    aboutP4: "Minha motivação reside em aplicar o rigor da engenharia para desenvolver softwares que não apenas funcionem, mas que otimizem processos e impulsionem a produtividade das organizações.",

    projectsTitle: "Projetos em destaque",
    projectsSubtitle: "Nesta secção, apresento uma seleção de projetos onde aplico o rigor da engenharia e a lógica de programação para resolver problemas reais. O meu foco reside no desenvolvimento de aplicações Full Stack escaláveis, na automação de processos e na extração de inteligência a partir de dados, transformando requisitos complexos em ferramentas digitais funcionais e orientadas a resultados.",
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

    project0_title: "E-commerce de Cursos - TECForte",
    project0_meta: "Projeto profissional • 2026",
    project0_description: "Desenvolvimento de uma plataforma de E-commerce Full Stack dedicada à venda de cursos online. O projeto utiliza React para uma interface dinâmica e responsiva, integrada a um ecossistema Flask (Python) para a gestão de regras de negócio, autenticação e persistência de dados em PostgreSQL.",
    project0_highlight: "Nesta aplicação, implementei uma arquitetura desacoplada onde o frontend em React consome uma API REST desenvolvida em Flask. No lado do cliente, foquei na criação de componentes reutilizáveis e num design responsivo orientado à experiência do utilizador (UX). No backend, estruturei um sistema de autenticação seguro e geri a lógica de catálogo e processamento de pedidos através de uma base de dados PostgreSQL. A solução destaca-se pela integração fluida entre as tecnologias, garantindo a escalabilidade da plataforma e a integridade das transações, desde a navegação do utilizador até à finalização do checkout.",

    project1_title: "Software de Gerencimento de Contratos",
    project1_meta: "Projeto pessoal / profissional • 2025",
    project1_description: "Desenvolvimento de um sistema inteligente de gestão de contratos utilizando Python e Flask, projetado para automatizar o pipeline de vendas e o cálculo de comissões. A ferramenta centraliza o registo de fecho de contratos e transforma dados brutos em indicadores estratégicos sobre performance de equipa e comportamento de mercado.",
    project1_highlight: "O sistema foi construído sobre uma arquitetura robusta utilizando Python e o micro-framework Flask, integrando uma base de dados relacional para a persistência e manipulação de fluxos contratuais complexos. Desenvolvi algoritmos para o processamento de lógica de negócio que automatizam o cálculo de comissões variáveis, tratando exceções e garantindo a integridade dos dados financeiros. No backend, implementei scripts de Data Analysis para realizar a filtragem e agregação de grandes volumes de registos, permitindo a extração de métricas de performance e a modelagem do perfil de cliente ideal (ICP). A interface comunica com o servidor para fornecer visualizações dinâmicas do pipeline, transformando operações manuais em processos automatizados e escaláveis, o que otimizou significativamente a eficiência operacional da equipa.",

    project2_title: "Projetos Acadêmcicos: Estrutura de Dados",
    project2_meta: "Projeto acadêmico • 2025",
    project2_description: "Implementação de algoritmos fundamentais e estruturas de dados utilizando Python e C. O foco deste tópico é demonstrar a capacidade de resolver problemas computacionais com eficiência, alternando entre a produtividade de linguagens modernas e o controle rigoroso de memória e performance de baixo e alto nível.",
    project2_highlight: "Nesta seção, exploro a base da ciência da computação através da estruturação eficiente de dados. Desenvolvi soluções em C e Python para algoritmos complexos de busca e ordenação, além de implementar estruturas como listas e pilhas. Todas as implementações são acompanhadas por uma análise de Complexidade (Big O Notation), garantindo que o software seja não apenas funcional, mas otimizado para lidar com grandes volumes de dados de forma escalável.",

    project3_title: "Portfolio Pessoal",
    project3_meta: "Projeto pessoal • 2025 • Em contante atualização",
    project3_description: "Ese próprio site, construído para ser simples de manter, rápido e de fácil leitura.",
    project3_highlight: "Este projeto foi desenvolvido utilizando as tecnologias fundamentais da web — HTML5, CSS3 e JavaScript (ES6+) — para garantir uma experiência leve, rápida e totalmente responsiva. A estrutura reflete o meu compromisso com um código limpo e semântico, onde o HTML5 estabelece uma base sólida para acessibilidade e otimização em motores de busca (SEO). A estilização em CSS3 utiliza recursos modernos como Flexbox e CSS Variables para criar um design adaptável e fluido em qualquer dispositivo, enquanto o JavaScript assegura a interatividade através da manipulação do DOM, validações dinâmicas e efeitos visuais que elevam a experiência do utilizador.",
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
    cardStackTitle: "Main stacks",

    aboutTitle: "About me",
    aboutP1: "I am a professional with a career path marked by the strategic transition from Civil Engineering and Operations Management to software development. Currently, I am pursuing a degree in Systems Analysis and Development, combining a specific analytical mindset with the ability to deliver technological solutions that generate a direct impact on the business.",
    aboutP2: "Throughout my career, I have specialized in transforming operational challenges into efficiencies through code and data. As Station Manager at Drivalia, I led results-oriented teams, where I implemented Power BI monitoring systems that ensured inventory accuracy exceeding 98%. At Synergies, I independently developed a tool in Python and Flask to automate contract tracking for Gold Energy, resulting in a 15% increase in new business closing rates.",
    aboutP3: "Regarding technical skills and results, I possess solid experience in developing Full Stack applications, having built a complete E-commerce platform with React and Flask focused on scalability and user experience (UX). I complement this profile with skills in automation and data, including the practical use of SQL and PostgreSQL to structure systems that manage data volumes exceeding 5000 users, and a high level of cultural adaptability supported by fluency in English (C1), which allows me to collaborate effectively in international environments and articulate solutions with technical and commercial stakeholders.",
    aboutP4: "My motivation lies in applying the rigor of engineering to develop software that not only works, but also optimizes processes and boosts the productivity of organizations.",

    projectsTitle: "Featured projects",
    projectsSubtitle: "In this section, I present a selection of projects where I apply engineering rigor and programming logic to solve real-world problems. My focus is on developing scalable Full Stack applications, automating processes, and extracting intelligence from data, transforming complex requirements into functional, results-oriented digital tools.",
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

    project0_title: "E-commerce for Courses - TECForte",
    project0_meta: "Professional project • 2026",
    project0_description: "Development of a full-stack e-commerce platform dedicated to selling online courses. The project uses React for a dynamic and responsive interface, integrated with a Flask (Python) ecosystem for managing business rules, authentication, and data persistence in PostgreSQL.",
    project0_highlight: "In this application, I implemented a decoupled architecture where the React frontend consumes a REST API developed in Flask. On the client side, I focused on creating reusable components and a responsive design oriented towards user experience (UX). On the backend, I structured a secure authentication system and managed the catalog logic and order processing through a PostgreSQL database. The solution stands out for its seamless integration between technologies, ensuring platform scalability and transaction integrity, from user navigation to checkout completion.",
    
    project1_title: "Contract Management Software",
    project1_meta: "Personal / profesional project • 2025",
    project1_description: "Development of an intelligent contract management system using Python and Flask, designed to automate the sales pipeline and commission calculation. The tool centralizes the registration of closed contracts and transforms raw data into strategic indicators on team performance and market behavior.",
    project1_highlight: "The system was built on a robust architecture using Python and the Flask micro-framework, integrating a relational database for the persistence and manipulation of complex contractual flows. I developed algorithms for processing business logic that automate the calculation of variable commissions, handling exceptions and ensuring the integrity of financial data. On the backend, I implemented Data Analysis scripts to filter and aggregate large volumes of records, allowing the extraction of performance metrics and the modeling of the ideal customer profile (ICP). The interface communicates with the server to provide dynamic pipeline visualizations, transforming manual operations into automated and scalable processes, which significantly optimized the team's operational efficiency.",

    project2_title: "Student Management Software",
    project2_meta: "Personal project • 2025",
    project2_description: "Implementation of fundamental algorithms and data structures using Python and C. The focus of this topic is to demonstrate the ability to efficiently solve computational problems, alternating between the productivity of modern languages ​​and specific low- and high-level memory and performance control.",
    project2_highlight: "In this section, I explore the foundation of computer science through efficient data structuring. I developed solutions in C and Python for complex search and sorting algorithms, as well as implementing structures such as lists and stacks. All implementations are accompanied by a Complexity Analysis (Big O Notation), ensuring that the software is not only functional but optimized to handle large volumes of data in a scalable manner.",

    project3_title: "Personal Portfolio",
    project3_meta: "Personal project • 2025 • Constantly updated",
    project3_description: "This very website, built to be simple to maintain, fast and easy to read.",
    project3_highlight: "This project was developed using fundamental web technologies — HTML5, CSS3, and JavaScript (ES6+) — to ensure a lightweight, fast, and fully responsive experience. The framework reflects my commitment to clean and semantic code, where HTML5 establishes a solid foundation for accessibility and search engine optimization (SEO). CSS3 styling utilizes modern features such as Flexbox and CSS Variables to create an adaptable and fluid design on any device, while JavaScript ensures interactivity through DOM manipulation, dynamic validations, and visual effects that enhance the user experience.",
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
