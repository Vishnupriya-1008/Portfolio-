'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import SocialLinks from '../components/SocialLinks'
import Loader from '../components/Loader'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Suman Mandava | Portfolio',
  description: 'Software Engineer specializing in building exceptional digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) {
      return
    }
  }, [isLoading])

  return (
    <html lang="en" className={inter.className}>
      <body>
        {isLoading && isHome ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <SocialLinks />
            <main>
              {children}
            </main>
          </>
        )}
      </body>
    </html>
  )
}
