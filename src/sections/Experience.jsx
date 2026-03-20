import React from 'react';
import { EXPERIENCE } from '../utils/data';
import { useInView } from '../hooks/useInView';
import styles from './Experience.module.css';

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={ref}>
          <p className="section-label">Experience</p>
          <h2 className="section-heading">Where I've worked.</h2>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCE.map((job, i) => (
            <div
              key={i}
              className={`${styles.item} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Timeline spine */}
              <div className={styles.spine}>
                <div className={styles.node}>
                  {job.current && <div className={styles.nodeRing} />}
                </div>
                <div className={styles.line} />
              </div>

              {/* Content */}
              <div className={styles.content}>
                {/* Header */}
                <div className={styles.header}>
                  <div className={styles.headerLeft}>
                    <h3 className={styles.role}>{job.role}</h3>
                    <p className={styles.company}>
                      {job.company}
                      <span className={styles.location}> — {job.location}</span>
                    </p>
                  </div>
                  <div className={styles.headerRight}>
                    <span className={`tag ${job.current ? 'tag-green' : 'tag-amber'}`}>
                      {job.current ? '● ' : ''}{job.period}
                    </span>
                  </div>
                </div>

                {/* Stack */}
                <div className={styles.stack}>
                  {job.stack.map((s) => (
                    <span key={s} className={`tag tag-sky`}>{s}</span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className={styles.highlights}>
                  {job.highlights.map((h, j) => (
                    <li key={j} className={styles.highlight}>
                      <span className={styles.bullet}>▸</span>
                      <span dangerouslySetInnerHTML={{ __html: h.replace(/30%/, '<strong class="accent-text">30%</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
