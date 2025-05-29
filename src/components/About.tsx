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

            <h3 className={styles.skillsHeading}>Skills</h3>
          </div>

          <ul className={styles.skillCategories}>
            <li>
              <h4 className={styles.categoryTitle}>Languages</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>Java</li>
                <li className={styles.skill}>C++</li>
                <li className={styles.skill}>Python</li>
                <li className={styles.skill}>HTML/CSS</li>
                <li className={styles.skill}>JavaScript</li>
              </ul>
            </li>
            <li>
              <h4 className={styles.categoryTitle}>Frameworks</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>React.js</li>
                <li className={styles.skill}>Node.js</li>
                <li className={styles.skill}>Express.js</li>
                <li className={styles.skill}>Material UI</li>
                <li className={styles.skill}>Bootstrap</li>
                <li className={styles.skill}>Context API</li>
                <li className={styles.skill}>JSON Web Token</li>
              </ul>
            </li>
            <li>
              <h4 className={styles.categoryTitle}>Databases & DevOps</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>MySQL</li>
                <li className={styles.skill}>MongoDB (NoSQL)</li>
                <li className={styles.skill}>PostgreSQL</li>
                <li className={styles.skill}>Git</li>
                <li className={styles.skill}>Firebase</li>
                <li className={styles.skill}>GCP</li>
                <li className={styles.skill}>Docker</li>
              </ul>
            </li>
            <li>
              <h4 className={styles.categoryTitle}>Machine Learning & AI</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>PyTorch & TensorFlow</li>
                <li className={styles.skill}>Transformer Models</li>
                <li className={styles.skill}>CLIP & Vision-Language</li>
                <li className={styles.skill}>Computer Vision</li>
                <li className={styles.skill}>Multi-head Classification</li>
                <li className={styles.skill}>Action Units & VQA</li>
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