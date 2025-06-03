'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import styles from './SocialLinks.module.css'

const SocialLinks = () => {
  const links = [
    { icon: FiGithub, href: 'https://github.com/Vishnupriya-1008' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/vishnupriya-swaminathan-b4517222a/' },
    { icon: FiInstagram, href: 'https://www.instagram.com/vishnu_priya__10/' }
  ]

  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {links.map((link, i) => {
          const Icon = link.icon
          return (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 1 }}
            >
              <Icon size={20} />
            </motion.a>
          )
        })}
      </motion.div>

      <motion.div
        className={styles.email}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.a
          href="mailto:swamina3@buffalo.edu"
          className={styles.emailLink}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          swamina3@buffalo.edu
        </motion.a>
      </motion.div>
    </>
  )
}

export default SocialLinks 