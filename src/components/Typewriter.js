import React, { useState, useEffect } from 'react';

// Ten custom hook można wydzielić do osobnego pliku, ale dla prostoty zostawiam go tutaj
const useTypewriter = (lines, speed = 50, initialDelay = 1000) => {
  const [completedLines, setCompletedLines] = useState([]);
  const [currentPartial, setCurrentPartial] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setCompletedLines([]);
    setCurrentPartial('');
    setIsComplete(false);

    setTimeout(() => {
      const typeLine = (lineIndex) => {
        if (lineIndex >= lines.length) {
          setIsComplete(true);
          return;
        }

        const line = lines[lineIndex];
        let i = 0;
        const interval = setInterval(() => {
          if (i < line.length) {
            setCurrentPartial(prev => prev + line.charAt(i));
            i++;
          } else {
            clearInterval(interval);
            setCompletedLines(prev => [...prev, line]);
            setCurrentPartial('');
            typeLine(lineIndex + 1);
          }
        }, speed);
      };

      typeLine(0);
    }, initialDelay);

    return () => {
      // Cleanup if needed
    };
  }, [lines, speed, initialDelay]);  return { completedLines, currentPartial, isComplete };
};

const Typewriter = ({ lines, speed, initialDelay, onComplete }) => {
  const { completedLines, currentPartial, isComplete } = useTypewriter(lines, speed, initialDelay);

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <>
      {completedLines.map((line, index) => (
        <div key={index} style={index === lines.length - 1 ? { marginTop: '2em' } : {}}>{line}</div>
      ))}
      {currentPartial && <div>{currentPartial}</div>}
      <span style={styles.cursor}></span>
    </>
  );
};

const styles = {
  cursor: {
    display: 'inline-block',
    width: '10px',
    height: '1.5rem', // Dopasuj do rozmiaru czcionki
    backgroundColor: 'var(--primary-color)',
    animation: 'blink 1s step-end infinite',
    verticalAlign: 'bottom',
    marginLeft: '5px'
  }
};

// Wstrzykiwanie animacji globalnie, aby uniknąć problemów
// Możesz to przenieść do globals.css
if (typeof window !== 'undefined') {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes blink {
        from, to { opacity: 1; }
        50% { opacity: 0; }
      }
    `;
    try {
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    } catch (e) {
        console.warn("Could not insert keyframe rule:", e);
    }
}


export default Typewriter;