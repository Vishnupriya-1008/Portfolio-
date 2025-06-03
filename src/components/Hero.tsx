'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.p
        className={styles.greeting}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Hi, my name is
      </motion.p>
      
      <motion.h1
        className={styles.title}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
       Vishnupriya Swaminathan
      </motion.h1>
      
      <motion.p
        className={styles.description}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I&apos;m a Master’s student in AI at the University at Buffalo, with experience in full-stack development and machine learning, focused on building real-world AI solutions in healthcare, accessibility, and smart systems.
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="#work" className={styles.cta}>
          Check out my work!
        </a>
      </motion.div>
    </section>
  )
} 