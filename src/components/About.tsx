'use client'

import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>
        <span className={styles.number}>01.</span> About Me
      </h2>

      <div className={styles.inner}>
        <div className={styles.content}>
          <div>
            <p>
              Hello! My name is Suman and I enjoy building things that live on the internet. 
              My interest in web development started back in 2020 when I decided to try creating 
              a video streaming platform — turns out putting together a MERN stack application 
              taught me a lot about full-stack development!
            </p>

            <p>
              Fast-forward to today, and I&apos;ve had the privilege of working at{' '}
              <a href="#" className={styles.highlight}>a research lab</a>,{' '}
              <a href="#" className={styles.highlight}>a tech company</a>, and{' '}
              <a href="#" className={styles.highlight}>a software services firm</a>. 
              My main focus these days is building accessible, inclusive products and digital experiences at{' '}
              <a href="#" className={styles.highlight}>UB Research</a> while pursuing my MS in Computer Science.
            </p>

            <p>Here are my core areas of expertise:</p>
          </div>

          <ul className={styles.skillCategories}>
            <li>
              <h4 className={styles.categoryTitle}>Full Stack Development</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>MERN Stack (MongoDB, Express, React, Node.js)</li>
                <li className={styles.skill}>RESTful APIs & WebSocket Integration</li>
                <li className={styles.skill}>Cloud Services & DevOps</li>
                <li className={styles.skill}>UI/UX Design Implementation</li>
              </ul>
            </li>
            <li>
              <h4 className={styles.categoryTitle}>Deep Learning & AI</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>Computer Vision & Image Processing</li>
                <li className={styles.skill}>Transformer Models & CLIP</li>
                <li className={styles.skill}>PyTorch & TensorFlow</li>
                <li className={styles.skill}>Machine Learning Operations</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/winter-profile.jpg"
            alt="Suman Mandava"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  )
} 