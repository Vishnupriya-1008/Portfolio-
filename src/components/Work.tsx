'use client'

import Image from 'next/image'
import styles from './Work.module.css'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

const projects = [
  {
    title: 'AptitudeAI: Intelligent Screening Agent',
    description:
      'Built a custom adaptive interview environment using OpenAI Gym and PyTorch, tracking candidate accuracy, progress, and skill scores. Co-trained dual DQN agents for difficulty and domain selection using greedy exploration and entropy regularization. Achieved a 20% increase in cumulative reward over a static baseline.',
    tech: ['Python', 'Reinforcement Learning', 'OpenAI Gym', 'PyTorch', 'DQN'],
    github: 'https://github.com/lakki12233/AptitudeAI',
    external: '#',
    image: '/images/aptitudeai.png' // replace with your actual image if available
  },
  {
    title: 'Predicting Alzheimer’s Progression',
    description:
      'Transformed ADNI biomarkers into normalized inputs for unsupervised clustering and HMM-based temporal modeling. Predicted cognitive stages using RF and MLP (63% accuracy), visualized latent spaces with UMAP, and validated APOE4 ↔ ABETA causal links. Proposed privacy-preserving techniques like federated learning.',
    tech: ['Python', 'Scikit-learn', 'PyTorch', 'UMAP', 'hmmlearn', 'NLME'],
    github: 'https://github.com/lakki12233/AlzheimerPrediction',
    external: '#',
    image: '/images/alzheimer.png' // replace with your actual image if available
  },
  {
    title: 'Traffic Violation Detection System',
    description:
      'Developed a real-time computer vision pipeline using YOLOv5/v8 and DeepSORT for detecting vehicle, helmet, and license plate violations. Integrated pose estimation, OCR, and multi-object tracking to flag violations such as no helmet, overloading, and posture infractions.',
    tech: ['YOLOv5', 'YOLOv8', 'DeepSORT', 'MediaPipe', 'EasyOCR', 'OpenCV', 'PyTorch'],
    github: 'https://github.com/lakki12233/TrafficViolationSystem',
    external: '#',
    image: '/images/traffic.png' // replace with your actual image if available
  }
]


const otherProjects = [
  {
    title: 'Road Lane Line Detection',
    description: 'Computer vision system for detecting road lane lines with 93.8% accuracy using OpenCV and Python. Implemented advanced image processing techniques for real-time lane detection.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'],
    github: '#',
    external: '#'
  },
  {
    title: 'Resume Screening Application',
    description: 'AI-powered resume screening tool using NLP and machine learning. Automates candidate evaluation by analyzing skills, experience, and qualifications.',
    tech: ['Python', 'NLP', 'scikit-learn', 'NLTK'],
    github: '#',
    external: '#'
  },
  {
    title: 'Object Detection System',
    description: 'Real-time object detection system using YOLO and TensorFlow. Capable of identifying multiple objects in images and video streams with high accuracy.',
    tech: ['Python', 'TensorFlow', 'YOLO', 'OpenCV'],
    github: '#',
    external: '#'
  }
]

export default function Work() {
  return (
    <section id="work" className={styles.work}>
      <h2 className={styles.heading}>
        <span className={styles.number}>03.</span> Some Things I&apos;ve Built
      </h2>

      <div className={styles.projectGrid}>
        {projects.map((project, i) => (
          <div key={i} className={styles.project}>
            <div className={styles.projectContent}>
              <div>
                <p className={styles.projectOverline}>Featured Project</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectDescription}>
                  <p>{project.description}</p>
                </div>
                <ul className={styles.projectTechList}>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className={styles.projectLinks}>
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                    <FiGithub />
                  </a>
                  <a href={project.external} target="_blank" rel="noreferrer" aria-label="External Link">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.projectImage}>
              <a href={project.external} target="_blank" rel="noreferrer">
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.img}
                  />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 className={styles.moreProjectsHeading}>Other Noteworthy Projects</h2>

      <div className={styles.otherProjectsGrid}>
        {otherProjects.map((project, i) => (
          <div key={i} className={styles.otherProject}>
            <div className={styles.projectTop}>
              <div className={styles.folderIcon}>
                <FiFolder />
              </div>
              <div className={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                  <FiGithub />
                </a>
                <a href={project.external} target="_blank" rel="noreferrer" aria-label="External Link">
                  <FiExternalLink />
                </a>
              </div>
            </div>

            <h3 className={styles.otherProjectTitle}>{project.title}</h3>
            <p className={styles.otherProjectDescription}>{project.description}</p>
            
            <ul className={styles.otherProjectTechList}>
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 