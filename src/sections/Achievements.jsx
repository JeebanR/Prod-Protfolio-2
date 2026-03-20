import React from 'react';
import { ACHIEVEMENTS } from '../utils/data';
import { useInView } from '../hooks/useInView';
import styles from './Achievements.module.css';

export default function Achievements() {
  const [ref, inView] = useInView();

  return (
    <section className={styles.section} aria-label="Key achievements">
      <div className={`container ${styles.grid}`} ref={ref}>
        {ACHIEVEMENTS.map((a, i) => (
          <div
            key={a.label}
            className={`${styles.item} ${inView ? styles.visible : ''}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className={styles.metric}>{a.metric}</span>
            <span className={styles.label}>{a.label}</span>
            <span className={styles.detail}>{a.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
