'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Experience.module.css'

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  const jobs = [
    {
      company: 'UB Research',
      role: 'Research Assistant',
      date: 'October 2024 - Present',
      points: [
        'Developed multi-head Transformer models to recognize affective states (Engagement, Boredom, Confusion, Frustration) using Action Unit (AU) and Valence-Arousal (VA) features from the DAiSEE dataset',
        'Achieved 78.08 test accuracy by training multihead classifiers across AU-only, VA-only, and fused VA+AU inputs',
        'Implemented parallel Transformer encoders with late fusion to enhance performance in complex emotional states'
      ]
    },
    {
      company: 'Centum T&S',
      role: 'Software Engineer Intern',
      date: 'April 2024 - June 2024',
      points: [
        'Built responsive HMI applications for BMRCL and DMRC metro systems using protobuf, ZeroMQ, and web sockets, achieving 30% improvement in system responsiveness',
        'Designed intuitive UI components with Handlebars.js and Node.js, enhancing driver control over console and audio configurations',
        'Translated business requirements into detailed technical specifications, ensuring accurate implementation and timely delivery'
      ]
    },
    {
      company: 'HCLTech',
      role: 'Software Engineer Intern',
      date: 'January 2024 - March 2024',
      points: [
        'Built a full-stack Online Video Platform using React.js, Node.js, and MongoDB, improving system performance by 25% and reducing authentication latency by 15%',
        'Engineered core features like JWT authentication, role-based user interfaces, and video streaming, boosting user engagement by 20%',
        'Designed and tested RESTful APIs and UI components with Material-UI, achieving a 20% drop in bug occurrences through rigorous unit testing'
      ]
    }
  ]

  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.heading}>02. Where I've Worked</h2>
      
      <div className={styles.container}>
        <div className={styles.tabs}>
          {jobs.map((job, index) => (
            <button
              key={job.company}
              className={`${styles.tab} ${activeTab === index ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          className={styles.content}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className={styles.role}>{jobs[activeTab].role}</h3>
          <div className={styles.company}>{jobs[activeTab].company}</div>
          <div className={styles.date}>{jobs[activeTab].date}</div>
          
          <ul className={styles.points}>
            {jobs[activeTab].points.map((point, index) => (
              <li key={index} className={styles.point}>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 