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
              Hello, I&apos;m Suman Mandava, a software developer with experience in building web-based applications 
              and a growing interest in machine learning and AI. I started in 2020 by developing a video streaming 
              platform using the MERN stack, and I&apos;ve continued to work on projects and internships that involve 
              creating efficient, user-focused systems.
            </p>

            <p>
              Currently, my research at the University at Buffalo focuses on deep learning models for emotion 
              recognition and vision-language tasks, where I explore Transformer architectures and CLIP-based encoders.
            </p>

            <p>
              I enjoy learning and working across different areas—whether it&apos;s web technologies, intelligent systems, 
              or emerging tools in AI—and I&apos;m always open to exploring new fields and challenges.
            </p>

            <h3 className={styles.skillsHeading}>Core Technologies</h3>
          </div>

          <ul className={styles.skillCategories}>
            <li>
              <h4 className={styles.categoryTitle}>Development</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>Full Stack (MERN)</li>
                <li className={styles.skill}>Python & Java</li>
                <li className={styles.skill}>Cloud & DevOps</li>
              </ul>
            </li>
            <li>
              <h4 className={styles.categoryTitle}>AI & ML</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>PyTorch & TensorFlow</li>
                <li className={styles.skill}>Computer Vision</li>
                <li className={styles.skill}>Transformer Models</li>
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