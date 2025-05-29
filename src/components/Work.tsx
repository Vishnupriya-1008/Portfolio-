'use client'

import styles from './Work.module.css'

const Work = () => {
  const experiences = [
    {
      title: 'Research Assistant',
      company: 'UB Research',
      date: 'October 2024 - Present',
      points: [
        'Developed multi-head Transformer models to recognize affective states (Engagement, Boredom, Confusion, Frustration) using Action Unit (AU) and Valence-Arousal (VA) features from the DAiSEE dataset',
        'Achieved 78.08 test accuracy by training multihead classifiers across AU-only, VA-only, and fused VA+AU inputs',
        'Implemented parallel Transformer encoders with late fusion to enhance performance in complex emotional states'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Centum T&S',
      date: 'June 2021 - July 2023',
      points: [
        'Led development of a real-time video streaming platform using WebRTC, achieving 40% reduction in latency',
        'Implemented WebSocket-based chat features supporting 1000+ concurrent users with Redis pub/sub',
        'Optimized MongoDB queries and implemented caching, reducing API response times by 60%'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'HCLTech',
      date: 'Jan 2021 - June 2021',
      points: [
        'Developed and maintained RESTful APIs using Node.js and Express, integrated with MySQL database',
        'Implemented user authentication and authorization using JWT tokens and bcrypt for password hashing',
        'Created automated test suites using Jest, achieving 85% code coverage'
      ]
    }
  ]

  return (
    <section id="experience" className={styles.section}>
      <h2 className="section-heading">
        <span className={styles.number}>02.</span> Where I&apos;ve Worked
      </h2>

      {experiences.map((experience, index) => (
        <div key={index} className={styles.experienceBlock}>
          <div className={styles.header}>
            <h3 className={styles.title}>{experience.title}</h3>
            <p className={styles.company}>{experience.company}</p>
            <p className={styles.date}>{experience.date}</p>
          </div>
          <ul className={styles.points}>
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Work 