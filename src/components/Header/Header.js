import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  // Definiujemy elementy menu w tablicy z klawiszami skrótów
  const menuItems = [
    { label: '[O] NAS', href: '#about', key: 'o' },
    { label: '[U]MIEJĘTNOŚCI', href: '#skills', key: 'u' },
    { label: '[P]ROJEKTY', href: '#projects', key: 'p' },
    { label: '[K]ONTAKT', href: '#contact', key: 'k' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.prompt}>
        &gt;_ C:\PORTFOLIO&gt;_
      </div>
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <a key={item.label} href={item.href} className={styles.navLink} data-key={item.key}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;