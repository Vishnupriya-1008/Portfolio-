'use client'

import Image from 'next/image'
import styles from './About.module.css'

const About = () => {
  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'MongoDB',
    'Express',
    'Next.js'
  ]

  return (
    <section id="about" className={styles.about}>
      <h2 className="section-heading">
        <span className={styles.number}>01.</span> About Me
      </h2>

      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Hello! I&apos;m Suman, and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2019 when I decided to try 
            customizing Tumblr themes — turns out hacking together custom CSS taught me 
            a lot about HTML & CSS!
          </p>

          <p>
            Fast-forward to today, and I&apos;ve had the privilege of working at a research lab, 
            a tech corporation, and a software consultancy. My main focus these days is 
            building accessible, inclusive products and digital experiences at University at 
            Buffalo for a variety of clients.
          </p>

          <p>
            I also recently launched a course that covers everything you need to build a 
            web app with the MERN stack.
          </p>

          <p>Here are a few technologies I&apos;ve been working with recently:</p>

          <ul className={styles.skills}>
            {technologies.map((tech) => (
              <li key={tech} className={styles.skill}>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/winter-profile.jpg"
            alt="Suman Mandava"
            width={300}
            height={300}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default About 