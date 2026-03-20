import React, { useState } from 'react';
import { NAV_LINKS, PERSONAL } from '../utils/data';
import { useScrolled, useScrollSpy } from '../hooks/useScrollSpy';
import styles from './Navbar.module.css';

export default function Navbar() {
  const scrolled = useScrolled(60);
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.href.slice(1)));
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`}>
        {/* Logo */}
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoMono}>JKR</span>
          <span className={styles.logoDot} />
        </a>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            return (
              <li key={id}>
                <a
                  href={link.href}
                  className={`${styles.link} ${activeId === id ? styles.active : ''}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a href="#contact" className={`btn-primary ${styles.cta}`}>
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.open : ''} />
          <span className={menuOpen ? styles.open : ''} />
          <span className={menuOpen ? styles.open : ''} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
