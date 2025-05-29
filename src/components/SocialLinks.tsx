'use client'

import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'
import styles from './SocialLinks.module.css'

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/lakki12233',
      icon: <FiGithub size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sumanmandava',
      icon: <FiLinkedin size={20} />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/suman._.03',
      icon: <FiInstagram size={20} />
    },
    {
      name: 'Email',
      url: 'mailto:sumanman@buffalo.edu',
      icon: <FiMail size={20} />
    }
  ]

  return (
    <div className={styles.socialLinks}>
      <ul className={styles.list}>
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.line} />
    </div>
  )
}

export default SocialLinks 