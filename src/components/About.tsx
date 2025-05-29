'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './About.module.css'

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript',
    'React', 'Node.js',
    'Python', 'Java',
    'C++', 'MongoDB'
  ]

  return (
    <section id="about" className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading}>
          <span className={styles.number}>01.</span> About Me
        </h2>
        
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Hello! My name is Suman and I'm passionate about building innovative solutions 
              that make a difference. My journey in computer science began during my 
              undergraduate studies, where I discovered my love for problem-solving and 
              creating efficient software solutions.
            </p>
            
            <p>
              Fast-forward to today, and I've had the privilege of working at{' '}
              <span className={styles.highlight}>UB Research</span>,{' '}
              <span className={styles.highlight}>Centum T&S</span>, and{' '}
              <span className={styles.highlight}>HCLTech</span>. My main focus these 
              days is building innovative solutions and conducting research in machine 
              learning at the University at Buffalo.
            </p>

            <p>
              I'm currently working on developing multi-head Transformer models for 
              affective state recognition and exploring blockchain applications in KYC systems.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>

            <ul className={styles.skillList}>
              {skills.map((skill) => (
                <li key={skill} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src="/winter-profile.jpg"
                alt="Suman Mandava"
                width={300}
                height={300}
                priority
                quality={95}
                className={styles.image}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.imageBorder} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About 