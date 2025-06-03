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
              Hello, I&apos;m Vishnu Priya, a software developer and AI enthusiast currently pursuing a Master’s in Artificial Intelligence at the University at Buffalo. With a background in full-stack development and applied machine learning, I enjoy building intelligent, user-centric systems that bridge software engineering and AI.
            </p>

            <p>
              Previously at IBM, I developed scalable customer portals and backend services using React.js, Node.js, and MongoDB, while also implementing CI/CD pipelines and test coverage improvements that reduced production defects. My academic and personal projects span areas like reinforcement learning, biomarker-based disease prediction, and real-time computer vision systems.
            </p>

            <p>
              My current research focuses on deep learning models for emotion recognition and vision-language tasks, using Transformer architectures and CLIP-based encoders. I&apos;m passionate about ethical and explainable AI, and enjoy working at the intersection of data, systems, and intelligent decision-making.
            </p>

            <h3 className={styles.skillsHeading}>Core skills</h3>
          </div>

          <div className={styles.skillCategories}>
            <div>
              <h4 className={styles.categoryTitle}>Development</h4>
              <ul className={styles.skills}>
                <li>Full Stack (React.js, Node.js, Express, MongoDB)</li>
                <li>Python, C++, JavaScript</li>
                <li>Cloud & DevOps (Docker, Jenkins, Firebase, GCP)</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.categoryTitle}>AI & ML</h4>
              <ul className={styles.skills}>
                <li>PyTorch, TensorFlow, Scikit-learn</li>
                <li>Computer Vision (YOLO, OpenCV, DeepSORT)</li>
                <li>Transformer Models & CLIP</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/pic1.jpg"
              alt="Vishnupriya Swaminathan"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
