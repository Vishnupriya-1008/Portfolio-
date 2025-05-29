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
    <section id="experience" className={styles.experience}>
      <h2 className="section-heading">
        <span className={styles.number}>02.</span> Where I&apos;ve Worked
      </h2>

      <div className={styles.container}>
        <div className={styles.company}>
          <h3>Research Assistant</h3>
          <p className={styles.companyName}>UB Research</p>
          <p className={styles.duration}>October 2024 - Present</p>
        </div>

        <ul className={styles.responsibilities}>
          <li>
            Developed multi-head Transformer models to recognize affective states (Engagement, Boredom, Confusion, Frustration) using Action Unit (AU) and Valence-Arousal (VA) features from the DAiSEE dataset
          </li>
          <li>
            Achieved 78.08 test accuracy by training multihead classifiers across AU-only, VA-only, and fused VA+AU inputs
          </li>
          <li>
            Implemented parallel Transformer encoders with late fusion to enhance performance in complex emotional states
          </li>
        </ul>
      </div>

      <div className={styles.container}>
        <div className={styles.company}>
          <h3>Software Engineer</h3>
          <p className={styles.companyName}>Centum T&S</p>
          <p className={styles.duration}>June 2021 - July 2023</p>
        </div>

        <ul className={styles.responsibilities}>
          <li>
            Led development of a real-time video streaming platform using WebRTC, achieving 40% reduction in latency
          </li>
          <li>
            Implemented WebSocket-based chat features supporting 1000+ concurrent users with Redis pub/sub
          </li>
          <li>
            Optimized MongoDB queries and implemented caching, reducing API response times by 60%
          </li>
        </ul>
      </div>

      <div className={styles.container}>
        <div className={styles.company}>
          <h3>Software Developer Intern</h3>
          <p className={styles.companyName}>HCLTech</p>
          <p className={styles.duration}>Jan 2021 - June 2021</p>
        </div>

        <ul className={styles.responsibilities}>
          <li>
            Developed and maintained RESTful APIs using Node.js and Express, integrated with MySQL database
          </li>
          <li>
            Implemented user authentication and authorization using JWT tokens and bcrypt for password hashing
          </li>
          <li>
            Created automated test suites using Jest, achieving 85% code coverage
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience 