'use client'

import { useEffect, useState } from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={`${styles.loader} ${isMounted ? styles.fadeOut : ''}`}>
      <div className={styles.logoWrapper}>
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={styles.logo}>
          <g>
            <g id="S" transform="translate(35.000000, 35.000000)">
              <path
                fill="currentColor"
                d="M 15,0 L 15,30 L 0,30 L 0,25 L 10,25 L 10,5 L 0,5 L 0,0 L 15,0 Z"
              />
            </g>
            <path
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 50, 5
                 L 11, 27
                 L 11, 72
                 L 50, 95
                 L 89, 73
                 L 89, 28 z"
              fill="none"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Loader 