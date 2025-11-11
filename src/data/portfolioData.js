export const portfolioData = {
  profile: {
    name: "Alex 'Neo' Kowalski",
    title: "Full Stack Developer & Digital Architect",
    location: "Warsaw, Poland",
    email: "neo.kowalski@matrix.dev",
    phone: "+48 123 456 789",
    github: "https://github.com/neo-kowalski",
    linkedin: "https://linkedin.com/in/neo-kowalski",
    experience: "5+ years",
    status: "Available for freelance projects",
    motto: "There is no spoon... only clean code."
  },
  skills: {
    frontend: [
      { name: "React.js", level: 90 }, // <-- DODANE
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "SASS/SCSS", level: 90 }
    ],
    backend: [
      { name: "Node.js", level: 90 }, // <-- DODANE
      { name: "Python", level: 85 },   // <-- DODANE
      { name: "PHP", level: 80 },
      { name: "Express.js", level: 90 },
      { name: "RESTful APIs", level: 95 }
    ],
    database: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 }
    ],
    tools: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Linux", level: 90 },
      { name: "VS Code", level: 95 }
    ]
  },
  projects: [
    {
      id: 1,
      name: "Konfigurator zamówień zamków",
      description: "Aplikacja webowa B2B pozwalająca na wizualną konfigurację i składanie spersonalizowanych zamówień na zamki antywłamaniowe.",
      technologies: ["React", "Node.js", "PostgreSQL", "Three.js", "PDFKit"],
      features: [
        "Wizualna konfiguracja produktu w 3D",
        "Logika biznesowa walidująca opcje w czasie rzeczywistym",
        "Automatyczne generowanie specyfikacji PDF dla produkcji",
        "System zarządzania zamówieniami dla administratorów"
      ],
      github: "https://github.com/neo-kowalski/lock-configurator",
      demo: "https://lock-configurator.demo",
      status: "Completed",
      year: "2023"
    },
    {
      id: 2,
      name: "Strona z newsami (Headless CMS)",
      description: "Nowoczesny portal informacyjny oparty na architekturze Headless CMS, zapewniający błyskawiczne ładowanie i łatwe zarządzanie treścią przez redakcję.",
      technologies: ["Next.js", "Strapi", "GraphQL", "TailwindCSS", "Vercel"],
      features: [
        "Statycznie generowane strony (SSG) dla maksymalnej wydajności",
        "Dynamiczne kategorie i tagi",
        "Zaawansowana wyszukiwarka po stronie klienta",
        "Panel dla redaktorów do zarządzania treścią bez kodu"
      ],
      github: "https://github.com/neo-kowalski/news-portal",
      demo: "https://news-portal.demo",
      status: "Completed",
      year: "2024"
    },
    {
      id: 3,
      name: "Strona z newsami 2 (Headless CMS)",
      description: "Nowoczesny portal informacyjny oparty na architekturze Headless CMS, zapewniający błyskawiczne ładowanie i łatwe zarządzanie treścią przez redakcję.",
      technologies: ["Next.js", "Strapi", "GraphQL", "TailwindCSS", "Vercel"],
      features: [
        "Statycznie generowane strony (SSG) dla maksymalnej wydajności",
        "Dynamiczne kategorie i tagi",
        "Zaawansowana wyszukiwarka po stronie klienta",
        "Panel dla redaktorów do zarządzania treścią bez kodu"
      ],
      github: "https://github.com/neo-kowalski/news-portal",
      demo: "https://news-portal.demo",
      status: "Completed",
      year: "2024"
    },
    {
      id: 4,
      name: "Strona z newsami 3 (Headless CMS)",
      description: "Nowoczesny portal informacyjny oparty na architekturze Headless CMS, zapewniający błyskawiczne ładowanie i łatwe zarządzanie treścią przez redakcję.",
      technologies: ["Next.js", "Strapi", "GraphQL", "TailwindCSS", "Vercel"],
      features: [
        "Statycznie generowane strony (SSG) dla maksymalnej wydajności",
        "Dynamiczne kategorie i tagi",
        "Zaawansowana wyszukiwarka po stronie klienta",
        "Panel dla redaktorów do zarządzania treścią bez kodu"
      ],
      github: "https://github.com/neo-kowalski/news-portal",
      demo: "https://news-portal.demo",
      status: "Completed",
      year: "2024"
    }
  ],
  
  // ---> UPEWNIJ SIĘ, ŻE TA SEKCJA ISTNIEJE <---
  achievements: [
    "🏆 Best Innovation Award - TechHack 2024",
    "🥇 1st Place - Blockchain Hackathon Warsaw 2023",
    "📜 AWS Certified Solutions Architect",
    "⭐ 5-star rating on Upwork (50+ projects)",
    "💡 Published 3 open-source libraries (1000+ stars)",
    "📝 Tech blogger - 25+ articles on dev.to"
  ],
  // ------------------------------------------------

  services: [
    // ... twoje dane o usługach
  ]
};