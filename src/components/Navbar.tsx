'use client'

import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">SM</Link>
        </div>

        <div className={styles.links}>
          <ol>
            {navItems.map((item, i) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <span className={styles.number}>0{i + 1}.</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ol>
          <a
            className={styles.resumeButton}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar 