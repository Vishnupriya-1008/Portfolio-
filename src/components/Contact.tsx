'use client'

import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading}>
          <span className={styles.number}>04.</span> What's Next?
        </h2>
        
        <h3 className={styles.title}>Get In Touch</h3>
        
        <p className={styles.text}>
          Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a
          href="mailto:sumanman@buffalo.edu"
          className={styles.button}
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  )
}

export default Contact 