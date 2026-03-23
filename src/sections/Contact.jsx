import React, { useState } from 'react';
import { PERSONAL } from '../utils/data';
import { useInView } from '../hooks/useInView';
import styles from './Contact.module.css';
import emailjs from "@emailjs/browser";

const INITIAL = { name: '', email: '', subject: '', message: '' };

function validate(form) {
  const errs = {};
  if (!form.name.trim()) errs.name = 'Name is required';
  if (!form.email.trim()) errs.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
  if (!form.message.trim()) errs.message = 'Message is required';
  return errs;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const errs = validate(form);
  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }

  setLoading(true);

  emailjs
    .send(
      "service_jae86qd",        // your service ID
      "template_knaifa9",       // your template ID
      {
        name: form.name,
        email: form.email,
        subject: form.subject || `Portfolio inquiry from ${form.name}`,
        message: form.message,
      },
      "-FKeBkbg4WzmS2TX6"       // your public key
    )
    .then(
      () => {
        setSent(true);
        setLoading(false);
        setForm(INITIAL);
        setErrors({});
      },
      (error) => {
        console.error("FAILED...", error.text);
        setLoading(false);
      }
    );
};

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid} ref={ref}>
          {/* Left */}
          <div className={`${styles.left} ${inView ? styles.visible : ''}`}>
            <p className="section-label">Contact</p>
            <h2 className="section-heading">
              Let's build<br />something great.
            </h2>
            <p className={styles.sub}>
              I'm open to new opportunities, collaborations, or just a conversation
              about interesting engineering challenges.
            </p>

            <div className={styles.infoItems}>
              <a href={`mailto:${PERSONAL.email}`} className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <p className={styles.infoValue}>{PERSONAL.email}</p>
                </div>
              </a>

              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.infoLabel}>LinkedIn</p>
                  <p className={styles.infoValue}>jeeban-rout-769769229</p>
                </div>
              </a>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className={styles.infoLabel}>Location</p>
                  <p className={styles.infoValue}>{PERSONAL.location}</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className={styles.availability}>
              <span className={styles.availDot} />
              <span>Available for full-time & freelance roles</span>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`${styles.right} ${inView ? styles.visible : ''}`}>
            {sent ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message sent successfully!</h3>
                <p>Thanks for reaching out. I’ll get back to you as soon as possible.</p>
                <button className="btn-outline" onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about the project or role..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>

<button 
  type="submit" 
  disabled={loading}
  className={`btn-primary ${styles.submitBtn}`}
>
  {loading ? "Sending..." : "Send Message"}
</button>

                <p className={styles.note}>
                  * Opens your email client with the message pre-filled. No data is stored.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}