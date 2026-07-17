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
    titleKey: 'project2_title',
    metaKey: 'project2_meta',
    descriptionKey: 'project2_description',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://studio-nm.vercel.app/',
    repoUrl: 'https://github.com/cdiasbrasilio/studio_nm',
    highlightKey: 'project2_highlight',
  },
  {
    titleKey: 'project1_title',
    metaKey: 'project1_meta',
    descriptionKey: 'project1_description',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://cdiasbrasilio.github.io/invoinceAndTariffComparator/',
    repoUrl: 'https://github.com/cdiasbrasilio/invoinceAndTariffComparator',
    highlightKey: 'project1_highlight',
  },
  {
    titleKey: 'project0_title',
    metaKey: 'project0_meta',
    descriptionKey: 'project0_description',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '', // String vazia para omitir o botão de deploy neste projeto específico
    repoUrl: 'https://github.com/cdiasbrasilio/web_portifolio',
    highlightKey: 'project0_highlight',
  },
];

// Alternar idioma e Dicionário
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
    projectsSubtitle: "Nesta secção, apresento uma seleção de projetos onde aplico o rigor da engenharia e a lógica de programação para resolver problemas reais. O meu foco reside no desenvolvimento de aplicações Full Stack escaláveis, na automação de processos e na extração de inteligência a partir de dados, transformando requisitos complexos in ferramentas digitais funcionais e orientadas a resultados.",
    projectsGitHubLink: "Código no GitHub",
    projectsLiveLink: "Ver projeto", // Adicionado para tradução dinâmina

    skillsTitle: "Skills",
    skillsFrontend: "Front-end",
    skillsFullStack: "Full Stack",
    skillsFrameworks: "Frameworks",
    skillsTools: "Ferramentas",
    skillsOther: "Outros",

    skillsBestPractices: "Boas práticas de UI/UX",
    skillsTeamwork: "Trabalho em equipe",
    skillsComunication: "Comunicação assertiva",

    contactTitle: "Contato",
    contactText: "Curtiu meu trabalho ou quer conversar sobre alguma oportunidade? Ficarei feliz em falar com você.",
    contactEmail: "Email:",
    contactLinkedin: "LinkedIn:",
    contactGithub: "GitHub:",

    footerRights: "© Cristiano Brasilio. Todos os direitos reservados.",
    footerBuilt: "Construído com HTML, CSS e JavaScript.",

    project0_title: "Portfolio Pessoal",
    project0_meta: "Projeto pessoal • 2025 • Em contante atualização",
    project0_description: "Esse próprio site, construído para ser simples de manter, rápido e de fácil leitura.",
    project0_highlight: "Este projeto foi desenvolvido utilizando as tecnologias fundamentais da web — HTML5, CSS3 e JavaScript (ES6+) — para garantir uma experiência leve, rápida e totalmente responsiva.",
  
    project1_title: "Comparador de Faturas e Tarifas",
    project1_meta: "Projeto de estudo • 2026 • Em constante atualização",
    project1_description: "Uma aplicação para comparar faturas e tarifas de energia e gás, voltado a comerciais da empresa Gold Energy, para auxiliar na negociação de contratos e otimização de custos.",
    project1_highlight: "Este projeto foi desenvolvido para praticar conceitos de programação e design de interfaces. Utiliza tecnologias modernas para criar uma experiência de usuário fluida e responsiva.",
  
    project2_title: "Studio NM",
    project2_meta: "Projeto comercial • 2026",
    project2_description: "Landing Page SPA premium desenvolvida com React e Tailwind CSS, focada na conversão de agendamentos e na expressão da identidade visual sofisticada de uma marca de estética.",
    project2_highlight: "Desenvolvimento de uma Landing Page responsiva em formato SPA (Single Page Application) para a Nail Designer Naila Macedo. O projeto foi arquitetado com foco total na conversão imediata."
  },

  en: {
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",

    heroTag: "Full Stack Software Developer • With emphasis on Python, JavaScript, C, and SQL",
    heroTitle: "Hello, I'm <span class='highlight'>Cristiano Brasilio</span>.",
    heroSubtitle: "Passionate about technology and constantly evolving technically.",
    btnProjects: "View projects",
    btnContact: "Get in touch",
    heroAvailable: "Available for opportunities.",

    cardLocationTitle: "Based in",
    cardLocationText: "Lisbon, Portugal",
    cardExpTitle: "Experience",
    cardExpText: "1 Year of Full Stack Development and Data",
    cardStackTitle: "Main stacks",

    aboutTitle: "About me",
    aboutP1: "I am a professional with a career path marked by the strategic transition from Civil Engineering and Operations Management to software development. Currently, I am pursuing a degree in Systems Analysis and Development, combining a specific analytical mindset with the ability to deliver technological solutions that have a direct impact on business.",
    aboutP2: "Throughout my career, I have specialized in transforming operational challenges into efficiencies through code and data. As a Station Manager at Drivalia, I led results-focused teams, where I implemented Power BI monitoring systems that ensured inventory accuracy above 98%. At Synergies, I independently developed a tool in Python and Flask to automate the tracking of Gold Energy contracts, resulting in a 15% increase in the closing rate of new business.",
    aboutP3: "Regarding technical skills and results, I possess solid experience in developing Full Stack applications and have built a complete E-commerce platform with React and Flask focused on scalability and user experience (UX). I complement this profile with skills in automation and data, including practical use of SQL and PostgreSQL to structure systems that manage data volumes exceeding 5000 users, and a high cultural adaptability supported by fluency in English (C1), which allows me to collaborate effectively in international environments and articulate solutions with technical and business stakeholders.",
    aboutP4: "My motivation lies in applying the rigor of engineering to develop software that not only works but optimizes processes and drives organizational productivity.",

    projectsTitle: "Featured projects",
    projectsSubtitle: "In this section, I present a selection of projects where I apply engineering rigor and programming logic to solve real problems. My focus lies in developing scalable Full Stack applications, automating processes, and extracting intelligence from data, transforming complex requirements into functional and results-oriented digital tools.",
    projectsGitHubLink: "Code on GitHub",
    projectsLiveLink: "Live Project", // Adicionado para tradução dinâmica

    skillsTitle: "Skills",
    skillsFullStack: "Full Stack",
    skillsFrameworks: "Frameworks",
    skillsTools: "Tools",
    skillsOther: "Other",

    skillsBestPractices: "UI/UX best practices",
    skillsTeamwork: "Teamwork",
    skillsComunication: "Assertive communication",

    contactTitle: "Contact",
    contactText: "Liked my work or want to talk about an opportunity? I’ll be happy to talk to you.",
    contactEmail: "Email:",
    contactLinkedin: "LinkedIn:",
    contactGithub: "GitHub:",

    footerRights: "© Cristiano Brasilio. All rights reserved.",
    footerBuilt: "Built with HTML, CSS and JavaScript.",

    project0_title: "Personal Portfolio",
    project0_meta: "Personal project • 2025 • Constantly updated",
    project0_description: "This very website, built to be simple to maintain, fast and easy to read.",
    project0_highlight: "This project was developed using fundamental web technologies — HTML5, CSS3, and JavaScript (ES6+) — to ensure a lightweight, fast, and fully responsive experience.",
  
    project1_title: "Invoice and Tariff Comparator",
    project1_meta: "Study project • 2026 • Constantly updated",
    project1_description: "An application to compare energy and gas invoices and tariffs for Gold Energy salespeople, to assist in contract negotiation and cost optimization.",
    project1_highlight: "This project was developed to practice programming concepts and interface design principles. It uses modern technologies to create a smooth and responsive user experience.",
  
    project2_title: "Studio NM",
    project2_meta: "Study project • 2026 • Constantly updated",
    project2_description: "A premium SPA Landing Page developed with React and Tailwind CSS, focused on appointment conversion and expressing the sophisticated visual identity of an aesthetics brand.",
    project2_highlight: "Development of a responsive Landing Page in SPA (Single Page Application) format for Nail Designer Naila Macedo. The project was architected with a total focus on immediate conversion."
  }
};

// Carrega os projetos manipulando dinamicamente o DOM de acordo com o idioma
function loadProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  projects.forEach(p => {
    // Avalia dinamicamente se o botão de liveUrl deve aparecer
    const liveButtonHtml = (p.liveUrl && p.liveUrl !== "#" && p.liveUrl.trim() !== "") 
      ? `<a href="${p.liveUrl}" class="project-link" target="_blank" rel="noreferrer">
          <span>${translations[currentLang].projectsLiveLink}</span>
          <span>↗</span>
         </a>`
      : "";

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
          ${liveButtonHtml}
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
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  loadProjects();

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