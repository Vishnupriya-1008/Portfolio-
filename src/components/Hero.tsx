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
        Suman Mandava
      </motion.h1>
      
      <motion.p
        className={styles.description}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I&apos;m a Computer Science graduate student at the University at Buffalo, specializing in building 
        exceptional digital experiences. Currently focused on machine learning, computer vision, and 
        developing accessible, human-centered applications while pursuing my MS in Computer Science.
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