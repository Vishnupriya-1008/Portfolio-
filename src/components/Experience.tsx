'use client'

import { useState } from 'react'
import styles from './Experience.module.css'

const jobs = [
  {
    company: 'UB Research',
    url: 'https://www.buffalo.edu/ai',
    title: 'Research Assistant',
    date: 'Oct 2024 - Present',
    points: [
      'Developed multi-head Transformer models to recognize affective states (Engagement, Boredom, Confusion, Frustration) using Action Unit (AU) and Valence-Arousal (VA) features from the DAiSEE dataset.',
      'Achieved 78.08% test accuracy by training multihead classifiers across AU-only, VA-only, and fused VA+AU inputs.',
      'Implemented parallel Transformer encoders with late fusion to enhance performance in complex emotional states such as confusion and frustration.'
    ]
  },
  {
    company: 'Centum T&S',
    url: 'https://www.centumelectronics.com/',
    title: 'Software Engineer Intern',
    date: 'April 2024 - Jun 2024',
    points: [
      'Built responsive HMI applications for BMRCL and DMRC metro systems using protobuf, ZeroMQ, and web sockets, achieving a 30% improvement in system responsiveness.',
      'Designed intuitive UI components (fault info screen, settings page) with Handlebars.js and Node.js, enhancing driver control over console and audio configurations.',
      'Translated business requirements into detailed technical specifications, ensuring accurate implementation and timely delivery of HMI features.'
    ]
  },
  {
    company: 'HCLTech',
    url: 'https://www.hcltech.com/',
    title: 'Software Engineer Intern',
    date: 'Jan 2024 - Mar 2024',
    points: [
      'Built a full-stack Online Video Platform using React.js, Node.js, and MongoDB, improving system performance by 25% and reducing authentication latency by 15%.',
      'Engineered core features like JWT authentication, role-based user interfaces, and video streaming, boosting user engagement by 20% and admin efficiency by 30%.',
      'Designed and tested RESTful APIs and UI components with Material-UI, achieving a 20% drop in bug occurrences through rigorous unit testing.'
    ]
  },
  {
    company: 'L&T Technology Services',
    url: 'https://www.ltts.com/',
    title: 'React.js Developer Intern',
    date: 'May 2023 - Jun 2023',
    points: [
      'Designed and implemented a Resume Shortlisting Application using React.js, improving efficiency in managing and evaluating job applicants resumes by 30%.',
      'Developed responsive UI components and implemented efficient state management using React hooks and context API.',
      'Collaborated with the HR team to understand requirements and implemented features for resume parsing and candidate evaluation.'
    ]
  }
]

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.heading}>
        <span className={styles.number}>02.</span> Where I&apos;ve Worked
      </h2>

      <div className={styles.inner}>
        <div className={styles.tabList}>
          {jobs.map((job, i) => (
            <button
              key={i}
              className={`${styles.tabButton} ${activeTab === i ? styles.active : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          <h3>
            <span>{jobs[activeTab].title}</span>
            <span className={styles.company}>
              &nbsp;@&nbsp;
              <a href={jobs[activeTab].url} target="_blank" rel="noreferrer">
                {jobs[activeTab].company}
              </a>
            </span>
          </h3>
          <p className={styles.date}>{jobs[activeTab].date}</p>
          <ul>
            {jobs[activeTab].points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
} 