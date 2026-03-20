import React, { useState } from 'react';
import { SKILLS } from '../utils/data';
import { useInView } from '../hooks/useInView';
import styles from './Skills.module.css';

const COLOR_MAP = {
  green: 'tag-green',
  amber: 'tag-amber',
  sky: 'tag-sky',
  violet: 'tag-violet',
};

function SkillCategory({ cat, delay, visible }) {
  return (
    <div
      className={`${styles.category} card ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.catHeader}>
        <span className={`${styles.catDot} ${styles[`dot_${cat.color}`]}`} />
        <h3 className={styles.catName}>{cat.category}</h3>
      </div>
      <div className={styles.tags}>
        {cat.items.map((item) => (
          <span key={item} className={`tag ${COLOR_MAP[cat.color]}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className={`section ${styles.section}`}>
      {/* Decorative line */}
      <div className={styles.lineDecor} aria-hidden="true" />

      <div className="container">
        <div className={styles.header} ref={ref}>
          <p className="section-label">Skills</p>
          <h2 className="section-heading">
            Tech I build with.
          </h2>
          <p className={styles.sub}>
            A curated stack refined through 3+ years of production engineering.
          </p>
        </div>

        <div className={styles.grid}>
          {SKILLS.map((cat, i) => (
            <SkillCategory
              key={cat.category}
              cat={cat}
              delay={i * 60}
              visible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
