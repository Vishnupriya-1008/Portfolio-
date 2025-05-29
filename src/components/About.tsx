'use client'

import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  const technologies = [
    // Languages
    'Java', 'C++', 'Python', 'JavaScript',
    // Frontend & Frameworks
    'React.js', 'Node.js', 'Express.js',
    // UI Libraries
    'Material UI', 'Bootstrap', 'Handlebars',
    // Databases
    'MongoDB', 'MySQL', 'PostgreSQL',
    // Cloud & DevOps
    'Docker', 'GCP', 'Firebase',
    // Tools & Technologies
    'REST APIs', 'WebSockets', 'JWT'
  ]

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
              Fast-forward to today, and I've had the privilege of working at{' '}
              <a href="#" className={styles.highlight}>a research lab</a>,{' '}
              <a href="#" className={styles.highlight}>a tech company</a>, and{' '}
              <a href="#" className={styles.highlight}>a software services firm</a>. 
              My main focus these days is building accessible, inclusive products and digital experiences at{' '}
              <a href="#" className={styles.highlight}>UB Research</a> while pursuing my MS in Computer Science.
            </p>

            <p>Here are some key technologies I work with:</p>
          </div>

          <ul className={styles.skillCategories}>
            <li>
              <h4 className={styles.categoryTitle}>Languages</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>Java</li>
                <li className={styles.skill}>C++</li>
                <li className={styles.skill}>Python</li>
                <li className={styles.skill}>JavaScript</li>
                <li className={styles.skill}>HTML/CSS</li>
              </ul>
            </li>
            <li>
              <h4 className={styles.categoryTitle}>Frameworks & Libraries</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>React.js</li>
                <li className={styles.skill}>Node.js</li>
                <li className={styles.skill}>Express.js</li>
                <li className={styles.skill}>Material UI</li>
                <li className={styles.skill}>Bootstrap</li>
                <li className={styles.skill}>Context API</li>
              </ul>
            </li>
            <li>
              <h4 className={styles.categoryTitle}>Databases & DevOps</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>MongoDB</li>
                <li className={styles.skill}>MySQL</li>
                <li className={styles.skill}>PostgreSQL</li>
                <li className={styles.skill}>Docker</li>
                <li className={styles.skill}>Git</li>
                <li className={styles.skill}>GCP</li>
              </ul>
            </li>
            <li>
              <h4 className={styles.categoryTitle}>Tools & Technologies</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>REST APIs</li>
                <li className={styles.skill}>WebSockets</li>
                <li className={styles.skill}>JWT</li>
                <li className={styles.skill}>OAuth</li>
                <li className={styles.skill}>Postman</li>
                <li className={styles.skill}>Wireshark</li>
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