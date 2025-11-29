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
      filename: "LOCKCONF",
      extension: ".EXE",
      size: "2.4MB",
      realName: "Konfigurator zamówień zamków",
      client: "Producent zamków antywłamaniowych",
      description: "Aplikacja webowa B2B pozwalająca na wizualną konfigurację i składanie spersonalizowanych zamówień na zamki antywłamaniowe.",
      challenge: "Klient potrzebował systemu, który uprości proces składania złożonych zamówień B2B. Dotychczasowy proces oparty na mailach i arkuszach Excel generował błędy i opóźnienia.",
      solution: "Stworzyliśmy interaktywny konfigurator 3D z walidacją w czasie rzeczywistym. System automatycznie generuje specyfikacje PDF gotowe do produkcji oraz integruje się z systemem ERP klienta.",
      outcome: "Redukcja błędów zamówień o 85%, skrócenie czasu obsługi zamówienia z 2 dni do 15 minut, wzrost satysfakcji klientów B2B o 40%.",
      technologies: ["React", "Node.js", "PostgreSQL", "Three.js", "PDFKit"],
      projectIcon: "[■]",
      year: "2023"
    },
    {
      id: 2,
      name: "BUDGET_MGR",
      filename: "BUDGET_MGR",
      extension: ".EXE",
      size: "3.1MB",
      realName: "Financial Budget Manager",
      client: "FinTech / Internal Tool",
      description: "Zaawansowany system do zarządzania finansami osobistymi i firmowymi z pełną analityką.",
      challenge: "Brak przejrzystości w przepływach finansowych, trudności z kategoryzacją transakcji oraz archiwizacją dokumentów źródłowych (rachunków) w jednym miejscu.",
      solution: "Zbudowano bezpieczną aplikację w oparciu o .NET Core 6.0 i SQL Server. Zaimplementowano system kategoryzacji, grup, obsługę załączników plików oraz moduł statystyczny filtrujący dane w czasie rzeczywistym.",
      outcome: "Pełna kontrola nad budżetem, automatyzacja raportowania wydatków i cyfryzacja dokumentacji finansowej.",
      technologies: [".NET Core 6.0", "SQL Server", "C#", "Entity Framework", "Chart.js"],
      projectIcon: "[●]",
      year: "2023"
    },
    {
      id: 3,
      name: "AKTUALNIK_AI",
      filename: "AKTUALNIK_AI",
      extension: ".SYS",
      size: "5.7MB",
      realName: "Aktualnik.pl - AI News Portal",
      client: "Media / Automation",
      description: "W pełni autonomiczny portal informacyjny oparty na agentach AI.",
      challenge: "Wysoki koszt i czasochłonność manualnego monitorowania trendów, redagowania newsów i dystrybucji treści w mediach społecznościowych.",
      solution: "Opracowano system agentów AI, którzy autonomicznie wyszukują trendy, weryfikują informacje, generują artykuły i publikują posty w social media bez ingerencji człowieka.",
      outcome: "Stworzenie samowystarczalnego serwisu newsowego działającego 24/7 z zerowym kosztem ludzkim po wdrożeniu.",
      technologies: ["Python", "AI LLM Models", "Social Media API", "Automation", "NLP"],
      projectIcon: "[◊]",
      link: "https://aktualnik.pl/",
      year: "2024"
    },
    {
      id: 4,
      name: "SHARE_FILE",
      filename: "SHARE_FILE",
      extension: ".DAT",
      size: "1.2MB",
      realName: "ShareFile Transfer App",
      client: "Utility / SaaS",
      description: "Platforma do błyskawicznego i bezpiecznego udostępniania plików.",
      challenge: "Istniejące rozwiązania były albo zbyt skomplikowane (wymagały kont), albo limitowały transfery w darmowych wersjach, utrudniając szybką wymianę danych.",
      solution: "Stworzono lekki i wydajny Full-Stack (Frontend + Backend) skupiony na minimalizmie i szybkości transferu, z intuicyjnym interfejsem drag&drop.",
      outcome: "Skrócenie czasu potrzebnego na udostępnienie pliku do kilku sekund, zwiększenie wygody użytkowników końcowych.",
      technologies: ["React", "Node.js", "Express", "File System API", "Vercel"],
      projectIcon: "[▲]",
      link: "https://sharefile.ovh/",
      year: "2024"
    },
    {
      id: 5,
      name: "POSITIVE",
      filename: "POSITIVE",
      extension: ".WP",
      size: "2.8MB",
      realName: "Po Prostu Pozytywnie Website",
      client: "Lifestyle / Blog",
      description: "Kompleksowa platforma contentowa oparta na CMS WordPress.",
      challenge: "Klient potrzebował zwiększyć rozpoznawalność marki w sieci i ułatwić kontakt z odbiorcami, przy jednoczesnym zachowaniu łatwości edycji treści.",
      solution: "Zaprojektowano i wdrożono customowy motyw WordPress, zoptymalizowany pod kątem Core Web Vitals i responsywności (RWD).",
      outcome: "Zwiększenie ruchu na stronie, profesjonalizacja wizerunku marki i uproszczenie procesu publikacji treści.",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "SEO"],
      projectIcon: "[□]",
      link: "https://poprostupozytywnie.pl/",
      year: "2023"
    }
  ],
  
  achievements: [
    "🏆 Nagroda 'To Działa™' - Kategoria Produkcyjna 2024",
    '(Za wdrożenie, które zadziałało za pierwszym razem, ku zdziwieniu nas samych i klienta.)',
    "🥇 Złoty Medal w Debugowaniu o Północy",
    '(Uhonorowani za znalezienie tego jednego brakującego średnika o 3 nad ranem.)',
    "📜 Certyfikat Przetrwania Aktualizacji Zależności",
    '(Pomyślnie zaktualizowaliśmy node_modules bez zepsucia całego projektu.)',
    "⭐ 5-gwiazdkowa ocena w kategorii 'Czyta dokumentację'",
    '(Przynajmniej jeden z nas twierdzi, że to robi.)',
    "☕ Rekord Zespołu w Przeliczaniu Kawy na Linie Kodu",
    '(Nasz współczynnik konwersji jest tajemnicą handlową.)',
    "🏆 Nagroda za Naprawienie Błędu, Który Sami Stworzyliśmy",
    '(I obiecujemy, że zrobimy to ponownie.)',
    "💡 Opublikowano 3 hipotezy na temat tego, dlaczego kod działa",
    '(Żadna nie została jeszcze potwierdzona eksperymentalnie.)',
    "📝 Autor bestsellera 'To działało na mojej maszynie i inne wymówki'",
    '(Dostępny w formie komentarzy w naszym kodzie źródłowym.)',
    "🥇 I Miejsce - Kto Dłużej Wytrzyma na Spotkaniu, Które Mogło Być Mailem",
    '(Nasz rekordzista zasnął dopiero po 45 minutach.)',
  ],
  // ------------------------------------------------

  services: [
    // ... twoje dane o usługach
  ]
};