import Head from 'next/head';
import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import MatrixRain from '../components/MatrixRain';
import DosWindow from '../components/DosWindow/DosWindow';
import DosModal from '../components/DosModal/DosModal';
import Typewriter from '../components/Typewriter';
import Header from '../components/Header/Header';

export default function Home({ portfolioData }) {
  const { profile, skills, projects, achievements } = portfolioData;
  const [bootComplete, setBootComplete] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Przygotowujemy dane do dwóch kolumn
  const skillCategories = Object.keys(skills);
  const leftColumnCategories = skillCategories.slice(0, 2); // np. frontend, backend
  const rightColumnCategories = skillCategories.slice(2, 4); // np. database, tools

  const scrollOffset = { scrollMarginTop: '5rem' };

  // Lista sekcji w kolejności
  const sectionOrder = ['about', 'skills', 'projects', 'contact'];
  
  // Mapowanie klawiszy do sekcji
  const keyToSection = {
    'o': 'about',
    'u': 'skills',
    'p': 'projects',
    'k': 'contact'
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Zamknij modal na ESC
      if (event.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
        return;
      }

      // Podczas boot sequence, DOWOLNY klawisz kończy sekwencję
      if (!bootComplete) {
        setBootComplete(true);
        return;
      }

      // Nawigacja klawiaturą po sekcjach
      const key = event.key.toLowerCase();
      if (keyToSection[key] && bootComplete) {
        const section = document.getElementById(keyToSection[key]);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      // Enter przewija do następnej sekcji
      if (event.key === 'Enter' && bootComplete) {
        const sections = sectionOrder.map(id => document.getElementById(id));
        const currentIdx = sections.findIndex(sec => {
          if (!sec) return false;
          const rect = sec.getBoundingClientRect();
          return rect.top <= 80 && rect.bottom > 80;
        });
        if (currentIdx !== -1 && currentIdx < sections.length - 1) {
          const nextSection = sections[currentIdx + 1];
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bootComplete, selectedProject]);

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
          {/* Sekcja powitalna - znika po naciśnięciu ENTER */}
          {!bootComplete && (
            <div id="welcome" style={{ 
              minHeight: '100vh', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-start', 
              paddingTop: '10vh',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'var(--bg-color)',
              zIndex: 2000
            }}>
              <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '1rem', width: '100%' }}>
                <DosWindow
                  title="C:\THREE GUYS ONE CODE\MAIN.TXT"
                  headerText="MS-DOS EDITOR"
                  style={{ width: '100%' }}
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
                  ]} speed={40} initialDelay={1000} />
                </DosWindow>
              </div>
            </div>
          )}

          <div id="about" style={{ ...scrollOffset, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10vh' }}>
            <DosWindow title="O.NAS">
              <h3 style={{ textAlign: 'center' }}>THREE GUYS ONE CODE</h3>
              <p style={{ textAlign: 'center', fontStyle: 'italic', opacity: 0.8 }}>
                Kompilujemy Twoją wizję w cyfrową rzeczywistość.
              </p>
              <p>Jesteśmy zgranym zespołem trzech pasjonatów, którzy łączą swoje unikalne umiejętności, aby tworzyć niezawodne i wydajne oprogramowanie. Wierzymy, że najlepszy kod powstaje w wyniku ścisłej współpracy i wspólnego dążenia do perfekcji.</p>
              <h3>Osiągnięcia Zespołu:</h3>
              {achievements.reduce((acc, curr, idx, arr) => {
                if (idx % 2 === 0) {
                  // achievement + opis
                  acc.push(
                    <p key={idx} style={{ marginBottom: '1em' }}>
                      <span style={{ fontWeight: 'bold' }}>{curr}</span><br />
                      <span style={{ fontStyle: 'italic', opacity: 0.8 }}>{arr[idx + 1] || ''}</span>
                    </p>
                  );
                }
                return acc;
              }, [])}
            </DosWindow>
          </div>

          <div id="skills" style={{ ...scrollOffset, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10vh' }}>
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
          
          <div id="projects" style={{ ...scrollOffset, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10vh' }}>
            <DosWindow title="PROJECTS.DIR">
              <div style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--primary-color)' }}>
                <p>Volume in drive C: THREE_GUYS_ONE_CODE</p>
                <p>Directory of C:\PORTFOLIO\PROJECTS</p>
              </div>
              
              {/* Tabela w stylu Norton Commander */}
              <div style={{ overflowX: 'auto', margin: '0 -0.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'monospace', minWidth: '500px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--primary-color)' }}>
                      <th style={{ textAlign: 'left', padding: '0.5rem' }}>NAZWA</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem' }}>EXT</th>
                      <th style={{ textAlign: 'right', padding: '0.5rem' }}>ROZMIAR</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem' }}>DATA</th>
                    </tr>
                  </thead>
                <tbody>
                  {projects.map(project => (
                    <tr 
                      key={project.id} 
                      onClick={() => setSelectedProject(project)}
                      style={{ 
                        cursor: 'pointer',
                        borderBottom: '1px dotted var(--primary-color)',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--primary-color)';
                        e.currentTarget.style.color = 'var(--bg-color)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--text-color)';
                      }}
                    >
                      <td style={{ padding: '0.5rem' }}>
                        <span style={{ marginRight: '0.5rem' }}>{project.projectIcon}</span>
                        {project.filename}
                      </td>
                      <td style={{ padding: '0.5rem' }}>{project.extension}</td>
                      <td style={{ textAlign: 'right', padding: '0.5rem' }}>{project.size}</td>
                      <td style={{ padding: '0.5rem' }}>{project.year}</td>
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
              
              <div style={{ marginTop: '1rem', paddingTop: '0.5rem', borderTop: '1px solid var(--primary-color)', opacity: 0.8 }}>
                <p>{projects.length} File(s)</p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>Kliknij na projekt, aby zobaczyć Case Study</p>
              </div>
            </DosWindow>
          </div>

          <div id="contact" style={{ ...scrollOffset, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10vh' }}>
            <DosWindow title="CONTACT.EXE" style={{ width: '100%' }}>
              {/* ASCII Art Header */}
              <pre style={{ textAlign: 'center', lineHeight: '1.2', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
{`
 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   
`}
              </pre>

              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>INICJUJ POŁĄCZENIE</h3>
                <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
                  Skontaktuj się z nami przez jeden z dostępnych kanałów komunikacji:
                </p>
              </div>

              {/* Email jako komenda terminala */}
              <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid var(--primary-color)', background: 'rgba(51, 167, 47, 0.05)' }}>
                <p style={{ marginBottom: '0.5rem' }}>C:\CONTACT&gt; EMAIL</p>
                <p style={{ fontSize: '1.2rem' }}>
                  <a 
                    href={`mailto:${profile.email}`}
                    style={{ 
                      color: 'var(--primary-color)', 
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}
                  >
                    ► {profile.email}
                  </a>
                </p>
              </div>

              {/* Social Media jako lista połączeń sieciowych */}
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>C:\CONTACT&gt; NETSTAT -A</p>
                <p style={{ opacity: 0.8, marginBottom: '1rem' }}>Aktywne połączenia sieciowe:</p>
                
                <div style={{ paddingLeft: '1rem' }}>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-color)' }}>●</span> GitHub
                    <a 
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: 'var(--text-color)', 
                        textDecoration: 'none',
                        marginLeft: '1rem'
                      }}
                    >
                      ► {profile.github}
                    </a>
                  </p>
                  
                  <p style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-color)' }}>●</span> LinkedIn
                    <a 
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: 'var(--text-color)', 
                        textDecoration: 'none',
                        marginLeft: '1rem'
                      }}
                    >
                      ► {profile.linkedin}
                    </a>
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px dashed var(--primary-color)', textAlign: 'center', opacity: 0.8 }}>
                <p>Status: {profile.status}</p>
                <p style={{ fontStyle: 'italic', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  "{profile.motto}"
                </p>
              </div>
            </DosWindow>
          </div>
        </main>
      </div>

      {/* Modal Case Study */}
      <DosModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
        title={selectedProject ? `${selectedProject.filename}${selectedProject.extension} - CASE STUDY` : ''}
      >
        {selectedProject && (
          <div>
            <h2 style={{ marginBottom: '1rem', borderBottom: '2px solid var(--primary-color)', paddingBottom: '0.5rem' }}>
              {selectedProject.projectIcon} {selectedProject.name}
            </h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>► KLIENT</h3>
              <p>{selectedProject.client}</p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>► WYZWANIE</h3>
              <p>{selectedProject.challenge}</p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>► ROZWIĄZANIE</h3>
              <p>{selectedProject.solution}</p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>► WYNIKI</h3>
              <p style={{ fontWeight: 'bold' }}>{selectedProject.outcome}</p>
            </div>
            
            <div style={{ marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--primary-color)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>► TECHNOLOGIE</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedProject.technologies.map(tech => (
                  <span 
                    key={tech} 
                    style={{ 
                      background: 'var(--primary-color)', 
                      color: 'var(--bg-color)', 
                      padding: '0.2rem 0.5rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {selectedProject.features && (
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>► KLUCZOWE FUNKCJE</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '0.3rem' }}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </DosModal>

      {/* CRT Overlay Effect */}
      <div className="crt-overlay"></div>

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