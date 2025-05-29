'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>
          <span className={styles.greeting}>Hi, my name is</span>
          <span className={styles.name}>Suman Mandava.</span>
          <span className={styles.tagline}>I build things for the web.</span>
        </h1>

        <p className={styles.description}>
          I'm a software engineer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products 
          while pursuing my MS in Computer Science at University at Buffalo.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="#work" className={styles.cta}>
            Check out my work!
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 