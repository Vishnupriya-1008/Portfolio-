'use client'

import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          <span className={styles.number}>04.</span> What&apos;s Next?
        </h2>

        <h3 className={styles.title}>Get In Touch</h3>

        <p className={styles.description}>
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <a href="mailto:sumanman@buffalo.edu" className={styles.button}>
          Say Hello
        </a>
      </motion.div>
    </section>
  )
}

export default Contact 