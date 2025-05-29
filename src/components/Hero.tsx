'use client'

import Link from 'next/link'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Hi, my name is</h1>
        <h2 className={styles.name}>Suman Mandava.</h2>
        <h3 className={styles.tagline}>I build things for the web.</h3>
        <p className={styles.description}>
          I&apos;m a software engineer specializing in building (and occasionally designing) 
          exceptional digital experiences. Currently, I&apos;m focused on building accessible, 
          human-centered products at University at Buffalo.
        </p>
        <Link href="#work" className={styles.button}>
          Check out my work!
        </Link>
      </div>
    </section>
  )
}

export default Hero 