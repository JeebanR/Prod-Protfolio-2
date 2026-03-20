import React, { useState } from 'react';
import { PROJECTS } from '../utils/data';
import { useInView } from '../hooks/useInView';
import styles from './Projects.module.css';

const SCALE_COLOR = {
  green: 'tag-green',
  sky: 'tag-sky',
  amber: 'tag-amber',
};

function ProjectCard({ project, index, visible }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Card header */}
      <div className={styles.cardHeader}>
        <div className={styles.cardNum} aria-hidden="true">
          0{index + 1}
        </div>
        <div className={styles.cardMeta}>
          <h3 className={styles.cardTitle}>{project.name}</h3>
          <span className={`tag ${SCALE_COLOR[project.scaleColor]}`}>
            {project.scale}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className={styles.desc}>{project.description}</p>

      {/* Highlights — expandable */}
      <div className={`${styles.highlights} ${expanded ? styles.open : ''}`}>
        <ul className={styles.list}>
          {project.highlights.map((h, i) => (
            <li key={i} className={styles.listItem}>
              <span className={styles.bullet}>▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle */}
      <button
        className={styles.toggle}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{expanded ? 'Show less' : 'View details'}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}
        >
          <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Tags */}
      <div className={styles.tags}>
        {project.tags.map((t) => (
          <span key={t} className="tag tag-violet">{t}</span>
        ))}
      </div>

      {/* Links */}
      <div className={styles.links}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkBtn} ${styles.linkBtnAccent}`}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={ref}>
          <p className="section-label">Projects</p>
          <h2 className="section-heading">
            Systems I've shipped.
          </h2>
          <p className={styles.sub}>
            Production platforms at scale — built, owned, and optimised.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              visible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
