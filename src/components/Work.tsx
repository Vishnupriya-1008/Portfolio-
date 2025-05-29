'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'
import styles from './Work.module.css'

const Work = () => {
  const projects = [
    {
      title: 'KYC Verification System',
      description: 'A blockchain-based KYC verification platform that ensures secure and efficient customer verification. Built with smart contracts for data integrity and CP-ABE encryption for privacy, achieving 98% accuracy in verification processes.',
      tech: ['Blockchain', 'Solidity', 'React', 'Node.js', 'Smart Contracts'],
      github: 'https://github.com/lakki12233/KYC_BLOCKCHAIN',
      external: 'https://github.com/lakki12233/KYC_BLOCKCHAIN',
      image: '/images/kyc.png'
    },
    {
      title: 'MERN Online Video Platform',
      description: 'A full-stack video platform built with MERN stack featuring JWT authentication, video streaming, admin dashboard, and AI-powered chatbot. Improved system performance by 25% and reduced authentication latency by 15%.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      github: 'https://github.com/lakki12233/MERN_OVP',
      external: 'https://github.com/lakki12233/MERN_OVP',
      image: '/images/ovp.png'
    },
    {
      title: 'Visual Question Answering',
      description: 'An advanced VQA system using CLIP and Transformer models to answer questions about real-world images. Integrated with object detection capabilities and handles challenging scenarios like blur and poor lighting.',
      tech: ['Python', 'OpenCV', 'NumPy', 'Machine Learning'],
      github: 'https://github.com/lakki12233/Object_Dectection',
      external: 'https://github.com/lakki12233/Object_Dectection',
      image: '/images/vqa.png'
    }
  ]

  return (
    <section id="work" className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading}>
          <span className={styles.number}>03.</span> Some Things I've Built
        </h2>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.projectContent}>
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
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub size={20} />
                  </a>
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  quality={95}
                  priority={index === 0}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Work 