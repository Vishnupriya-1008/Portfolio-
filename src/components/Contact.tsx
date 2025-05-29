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
        Although I&apos;m not currently looking for any new opportunities, my inbox is
        always open. Whether you have a question or just want to say hi, I&apos;ll try my
        best to get back to you!
      </p>

      <a
        href="mailto:mandavasuman@gmail.com"
        className={styles.button}
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  )
} 