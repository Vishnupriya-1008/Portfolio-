'use client'

import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  const one = <h1>Hi, my name is</h1>
  const two = <h2 className={styles.bigHeading}>Suman Mandava.</h2>
  const three = <h3 className={styles.bigHeading}>I build things for the web.</h3>
  const four = (
    <p>
      I&apos;m a software engineer specializing in building (and occasionally designing) 
      exceptional digital experiences. Currently, I&apos;m focused on building accessible, 
      human-centered products at University at Buffalo.
    </p>
  )
  const five = (
    <a href="#work" className={styles.button}>
      Check out my work!
    </a>
  )

  const items = [one, two, three, four, five]

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`${styles.fadeup} ${isMounted ? styles.mounted : ''}`}
            style={{ transitionDelay: `${i + 1}00ms` }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero 