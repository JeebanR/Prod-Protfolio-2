import React, { useEffect, useState } from 'react';
import { PERSONAL } from '../utils/data';
import styles from './Hero.module.css';

const TYPED_STRINGS = [
  'Full Stack Developer',
  'Node.js Engineer',
  'React Specialist',
  'AWS Serverless Dev',
];

function useTyped(strings, speed = 70, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(charIdx + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setCharIdx(0);
          setIdx((idx + 1) % strings.length);
        } else {
          setCharIdx(charIdx - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, strings, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTyped(TYPED_STRINGS);

  return (
    <section id="hero" className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Glowing orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Status badge */}
        <div className={styles.badge}>
          <span className={styles.dot} />
          <span className="mono">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className={styles.name}>
          <span className={styles.nameFirst}>Jeeban Kumar</span>
          <br />
          <span className={styles.nameLast}>Rout</span>
        </h1>

        {/* Typed role */}
        <div className={styles.role}>
          <span className={styles.typedLabel}>
            {typed}
            <span className={styles.cursor}>|</span>
          </span>
        </div>

        {/* Summary */}
        <p className={styles.summary}>
          Building production-grade full stack systems serving{' '}
          <span className="accent">700,000+ users</span>.
          <br className="hide-mobile" />
          Specialised in Node.js, React, TypeScript & AWS Serverless.
        </p>

        {/* Stats row */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>700K<span className="accent">+</span></span>
            <span className={styles.statLabel}>Users Served</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>30<span className="accent">%</span></span>
            <span className={styles.statLabel}>Perf Improvement</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>3<span className="accent">+</span></span>
            <span className={styles.statLabel}>Years Exp</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>3</span>
            <span className={styles.statLabel}>Platforms Built</span>
          </div>
        </div>

        {/* CTA row */}
        <div className={styles.ctas}>
          <a href="#projects" className="btn-primary">
            View Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBtn}
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scroll} aria-hidden="true">
        <span className="mono">scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
