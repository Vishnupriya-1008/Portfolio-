import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Software Engineer & Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="bg-navy text-slate antialiased">
        {children}
      </body>
    </html>
  )
}

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
