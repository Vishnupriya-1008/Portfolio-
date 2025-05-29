'use client'

import Link from 'next/link'
import styles from './Navigation.module.css'
import { motion } from 'framer-motion'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <motion.div 
        className={styles.logo}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/">
          <div className={styles.logoHex}>SM</div>
        </Link>
      </motion.div>

      <motion.div 
        className={styles.links}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="#about">
          <span className={styles.number}>01.</span>About
        </Link>
        <Link href="#experience">
          <span className={styles.number}>02.</span>Experience
        </Link>
        <Link href="#work">
          <span className={styles.number}>03.</span>Work
        </Link>
        <Link href="#contact">
          <span className={styles.number}>04.</span>Contact
        </Link>
        <a 
          href="/Suman_Mandava_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.resumeButton}
        >
          Resume
        </a>
      </motion.div>
    </nav>
  )
}

export default Navigation 