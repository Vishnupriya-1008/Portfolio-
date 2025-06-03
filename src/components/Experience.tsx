'use client'

import { useState } from 'react'
import styles from './Experience.module.css'

const jobs = [
  {
    company: 'IBM',
    url: 'https://www.ibm.com/',
    title: 'Application Developer',
    date: 'Mar 2023 – Aug 2024',
    points: [
      'Developed a dynamic and responsive customer portal for the UPS project using React.js, delivering seamless user experience and intuitive design.',
      'Built robust backend services with Node.js, Express.js, and MongoDB using Mongoose ODM, enhancing efficiency and database operations.',
      'Reduced page load time by 60% through React optimization, code splitting, and efficient state management techniques.',
      'Implemented CI/CD pipelines with Jenkins and Docker, automating build and deployment workflows and reducing release cycles by 40%.',
      'Wrote unit and integration tests using Jest and Mocha, achieving 85% code coverage and reducing production defects by 25%.'
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
