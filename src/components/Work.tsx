'use client'

import Image from 'next/image'
import styles from './Work.module.css'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

const projects = [
  {
    title: 'Visual Question Answering System',
    description: 'A VQA system for real-world accessibility using the VizWiz dataset. Integrated CLIP (ViT-B/32) vision-language encoder with a lightweight multi-head classifier to answer questions about images captured by blind or low-vision users, achieving 70% test accuracy.',
    tech: ['Python', 'PyTorch', 'CLIP', 'Vision Transformer', 'Deep Learning'],
    github: 'https://github.com/lakki12233/VQA_bot',
    external: '#',
    image: '/images/vqa.png'
  },
  {
    title: 'KYC Verification System',
    description: 'A secure KYC verification system using blockchain technology. Features include document verification, face recognition, and digital signature validation. Built with React, Node.js, and Hyperledger Fabric.',
    tech: ['React', 'Node.js', 'Hyperledger Fabric', 'MongoDB', 'AWS'],
    github: 'https://github.com/lakki12233/kyc-verification',
    external: '#',
    image: '/images/kyc.png'
  },
  {
    title: 'MERN Online Video Platform',
    description: 'A full-stack video streaming platform with real-time chat functionality. Implemented WebRTC for low-latency streaming and WebSocket for chat features supporting 1000+ concurrent users.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'WebRTC', 'Socket.io'],
    github: 'https://github.com/lakki12233/video-platform',
    external: '#',
    image: '/images/ovp.png'
  }
]

const otherProjects = [
  {
    title: 'Road Lane Line Detection',
    description: 'Developed a road lane line detection system using edge detection, Hough transform, image segmentation for accurate real-time lane identification, achieving 93.8% accuracy and processing at 0.18 s/frame. (IJFMR-2023) (Paper ID 6684)',
    tech: ['Python', 'OpenCV', 'Machine Learning', 'Edge Detection', 'Hough Transform'],
    github: 'https://github.com/lakki12233/Road-lane-line-detection',
    external: '#'
  },
  {
    title: 'Object Detection and Identification',
    description: 'Real-time ML scans, identifies, and analyzes objects in digital and physical environments using OpenCV.',
    tech: ['Python', 'OpenCV', 'Machine Learning', 'Object Detection', 'Computer Vision'],
    github: 'https://github.com/lakki12233/Object_Dectection',
    external: '#'
  },
  {
    title: 'Resume Screening Application',
    description: 'Efficiently filters resumes based on key conditions which help in optimizing the recruitment process (IJNRD2308305).',
    tech: ['React.js', 'Node.js', 'Machine Learning', 'NLP', 'Document Processing'],
    github: 'https://github.com/lakki12233/Resume-Filtering-Application',
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
      <a href="#" className={styles.archiveLink}>view the archive</a>

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