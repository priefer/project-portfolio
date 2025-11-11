import Head from 'next/head';
import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import MatrixRain from '../components/MatrixRain';
import DosWindow from '../components/DosWindow/DosWindow';
import ContactForm from '../components/ContactForm/ContactForm';
import Typewriter from '../components/Typewriter';
import Header from '../components/Header/Header';

export default function Home({ portfolioData }) {
  const { profile, skills, projects, achievements } = portfolioData;
  const [showEnter, setShowEnter] = useState(false);

  // Przygotowujemy dane do dwóch kolumn
  const skillCategories = Object.keys(skills);
  const leftColumnCategories = skillCategories.slice(0, 2); // np. frontend, backend
  const rightColumnCategories = skillCategories.slice(2, 4); // np. database, tools

  const scrollOffset = { scrollMarginTop: '5rem' };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Head>
        <title>C:\THREE GUYS ONE CODE</title>
        <meta name="description" content={profile.title} />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>█</text></svg>" />
      </Head>
      
      <MatrixRain />
      <Header />
      
      <div className="app-container">
        <main>
          {/* Sekcja główna bez zmian */}
          <div style={{ marginBottom: '22rem', marginTop: '18rem' }}>
          <DosWindow
            title="C:\THREE GUYS ONE CODE\MAIN.TXT"
            headerText="MS-DOS EDITOR"
          >
            <div style={{ border: '1px solid var(--primary-color)', padding: '0.5rem', textAlign: 'center', marginBottom: '1rem' }}>
              WITAJ W NASZYM PORTFOLIO
            </div>
            <Typewriter lines={[
              "System uruchomiony...",
              "Ładowanie profilu użytkownika... [OK]",
              "Ustanowienie bezpiecznego połączenia... [OK]",
              "Pobieranie danych użytkownika... [OK]",
              "Inicjalizacja zakończona pomyślnie.",
              "Naciśnij ENTER, aby kontynuować."
            ]} speed={40} initialDelay={1000} onComplete={() => setShowEnter(true)} />
          </DosWindow>
          </div>

          <div id="about" style={{ ...scrollOffset, marginBottom: '38rem'}}>
            <DosWindow title="O.NAS">
              <h3 style={{ textAlign: 'center' }}>THREE GUYS ONE CODE</h3>
              <p style={{ textAlign: 'center', fontStyle: 'italic', opacity: 0.8 }}>
                Kompilujemy Twoją wizję w cyfrową rzeczywistość.
              </p>
              <p>Jesteśmy zgranym zespołem trzech pasjonatów, którzy łączą swoje unikalne umiejętności, aby tworzyć niezawodne i wydajne oprogramowanie. Wierzymy, że najlepszy kod powstaje w wyniku ścisłej współpracy i wspólnego dążenia do perfekcji.</p>
              <h3>Osiągnięcia Zespołu:</h3>
              {achievements.map((item, index) => <p key={index}>- {item}</p>)}
            </DosWindow>
          </div>

          <div id="skills" style={{ ...scrollOffset, marginBottom: '38rem'}}>
            <DosWindow title="SKILLS.DAT">
              {/* --- UKŁAD DWUKOLUMNOWY DLA UMIEJĘTNOŚCI --- */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                
                {/* Lewa kolumna */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                  {leftColumnCategories.map(category => (
                    <div key={category} style={{marginBottom: '1.5rem'}}>
                      <h3 style={{textTransform: 'uppercase'}}>{category}</h3>
                      {skills[category].map(skill => (
                          <p key={skill.name}>
                            <span>{skill.name.padEnd(25, '.')} </span>
                            <span style={{
                              background: `linear-gradient(to right, var(--primary-color) ${skill.level}%, #333 ${skill.level}%)`,
                              color: 'transparent',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text'
                            }}>
                              [▆▆▆▆▆▆▆▆▆▆]
                            </span>
                          </p>
                      ))}
                    </div>
                  ))}
                </div>
                
                {/* Prawa kolumna */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                  {rightColumnCategories.map(category => (
                    <div key={category} style={{marginBottom: '1.5rem'}}>
                      <h3 style={{textTransform: 'uppercase'}}>{category}</h3>
                      {skills[category].map(skill => (
                          <p key={skill.name}>
                            <span>{skill.name.padEnd(25, '.')} </span>
                            <span style={{
                              background: `linear-gradient(to right, var(--primary-color) ${skill.level}%, #333 ${skill.level}%)`,
                              color: 'transparent',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text'
                            }}>
                              [▆▆▆▆▆▆▆▆▆▆]
                            </span>
                          </p>
                      ))}
                    </div>
                  ))}
                </div>

              </div>
            </DosWindow>
          </div>
          
          <div id="projects" style={{ ...scrollOffset, marginBottom: '30rem' }}>
            {/* Pass the 'fixedWindow' class name here */}
            <DosWindow
              title="PROJECTS.DIR"
              className="fixedWindow" 
            >
              {/* The content is now a direct child, which is key! */}
              {projects.map(project => (
                <div
                  key={project.id}
                  style={{
                    borderBottom: '1px dashed var(--primary-color)',
                    marginBottom: '1rem',
                    paddingBottom: '1rem',
                  }}
                >
                  <h4>
                    {project.name} - [{project.status}]
                  </h4>
                  <p>{project.description}</p>
                  <p>Technologie: {project.technologies.join(', ')}</p>
                </div>
              ))}
            </DosWindow>
          </div>

          <div id="contact" style={{ ...scrollOffset, marginBottom: '24rem' }}>
            <DosWindow title="CONTACT.EXE">
              <ContactForm />
            </DosWindow>
          </div>
        </main>
      </div>
      
      <footer style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, background: 'var(--bg-color)', borderTop: '2px solid var(--primary-color)',
        color: 'var(--primary-color)', padding: '0.5rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 100
      }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 'bold', textShadow: '0 0 10px var(--primary-color)', marginBottom: '0.5rem' }}>
          Reality is not what it seems... neither is our code.
        </div>
        <div style={{ fontSize: '1rem', background: 'var(--primary-color)', color: 'var(--bg-color)', textShadow: 'none', padding: '0 0.5rem', width: '100%', textAlign: 'center' }}>
          MS-DOS Portfolio v1.0 © {new Date().getFullYear()} | Three guys one code
        </div>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  return { props: { portfolioData } };
}