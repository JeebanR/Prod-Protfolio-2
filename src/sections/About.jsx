import React from 'react';
import { PERSONAL, EDUCATION } from '../utils/data';
import { useInView } from '../hooks/useInView';
import styles from './About.module.css';

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section">
      <div className={`container ${styles.grid}`} ref={ref}>
        {/* Left — Text */}
        <div className={`${styles.left} ${inView ? styles.visible : ''}`}>
          <p className="section-label">About</p>
          <h2 className="section-heading">
            The developer behind<br />the systems.
          </h2>

          <p className={styles.bio}>
            I'm a Full Stack Developer based in Hyderabad with 3+ years of experience building
            production-grade applications. I own systems end-to-end — from a pixel-perfect
            React UI to a performant, secure Node.js backend deployed on AWS.
          </p>
          <p className={styles.bio}>
            My strength is in architecting scalable backends and optimising database
            performance — delivering a{' '}
            <span className="accent">30% API response time improvement</span> through
            PostgreSQL query tuning and indexing on a platform serving 700,000+ users.
          </p>
          <p className={styles.bio}>
            I care deeply about clean architecture, security, and operational reliability.
            Whether it's JWT/RBAC systems, AWS serverless automation, or Salesforce CRM
            integration — I deliver with ownership.
          </p>

          {/* Education */}
          <div className={styles.edu}>
            {EDUCATION.map((e) => (
              <div key={e.degree} className={styles.eduCard}>
                <div className={styles.eduIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.eduDegree}>{e.degree}</p>
                  <p className={styles.eduInst}>{e.institution}</p>
                  <div className={styles.eduMeta}>
                    <span className="tag tag-green">{e.period}</span>
                    <span className="tag tag-amber">{e.note}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Info card */}
        <div className={`${styles.right} ${inView ? styles.visible : ''}`}>
          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <span className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                profile.json
              </span>
              <div className={styles.dots}>
                <span /><span /><span />
              </div>
            </div>
            <pre className={styles.code}>{`{
  "name": "Jeeban Kumar Rout",
  "role": "Full Stack Developer",
  "location": "Hyderabad, India",
  "experience": "3+ years",
  "currentEmployer": "Kalgudi Digital",
  "status": "open_to_opportunities",

  "core_stack": [
    "Node.js", "React", "TypeScript",
    "PostgreSQL", "AWS"
  ],

  "impact": {
    "users_served": "700,000+",
    "perf_gain": "30% API speedup",
    "platforms": 3
  },

  "interests": [
    "System Design",
    "Serverless Architecture",
    "Performance Tuning",
    "Clean Code"
  ]
}`}</pre>
          </div>

          {/* Quick contact */}
          <div className={styles.quickContact}>
            <a href={`mailto:${PERSONAL.email}`} className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              <span>{PERSONAL.email}</span>
            </a>
            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <span className={styles.contactIcon}>in</span>
              <span>linkedin.com/in/jeeban-rout</span>
            </a>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span>{PERSONAL.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
