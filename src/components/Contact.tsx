'use client'

import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>
        <span className={styles.number}>04.</span> What&apos;s Next?
      </h2>

      <h2 className={styles.title}>Get In Touch</h2>

      <p className={styles.description}>
        I&apos;m open to opportunities in AI, ML, and full-stack development. Feel free to reach out — I’m always up for a conversation!

        I&apos;ll get back to you as soon as possible.
      </p>

      <a
        href="mailto:vishnupriyawp@gmail.com"
        className={styles.button}
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  )
} 