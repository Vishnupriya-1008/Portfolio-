'use client'

import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'
import styles from './SocialLinks.module.css'

const SocialLinks = () => {
  return (
    <>
      <div className={styles.socialLinks}>
        <ul className={styles.list}>
          <li>
            <a
              href="https://github.com/lakki12233"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/sumanmandava"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/suman._.03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram size={20} />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.email}>
        <a href="mailto:sumanman@buffalo.edu">sumanman@buffalo.edu</a>
      </div>
    </>
  )
}

export default SocialLinks 