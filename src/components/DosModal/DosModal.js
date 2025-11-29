import styles from './DosModal.module.css';

export default function DosModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Pasek tytułowy w stylu DOS */}
        <div className={styles.titleBar}>
          <span className={styles.title}>{title || 'DIALOG.EXE'}</span>
          <button className={styles.closeBtn} onClick={onClose} title="Zamknij">
            [X]
          </button>
        </div>
        
        {/* Zawartość modala */}
        <div className={styles.content}>
          {children}
        </div>
        
        {/* Stopka z instrukcją */}
        <div className={styles.footer}>
          <span>ESC - Zamknij | ENTER - OK</span>
        </div>
      </div>
    </div>
  );
}
