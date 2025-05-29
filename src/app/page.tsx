/* @reference "tailwindcss" */
'use client'

import Navigation from '@/components/Navigation'
import SocialLinks from '@/components/SocialLinks'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <SocialLinks />
      
      <div className={styles.container}>
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
          
          <motion.h2
            className={styles.subtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p
            className={styles.description}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I&apos;m a software engineer specializing in building exceptional digital experiences.
            Currently, I&apos;m focused on building accessible, human-centered products.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#work"
              className={styles.cta}
            >
              Check out my work!
            </a>
          </motion.div>
        </section>

        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </main>
  )
}
