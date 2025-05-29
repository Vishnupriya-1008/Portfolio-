'use client'

import { useEffect, useState } from 'react'
import Navigation from './Navigation'
import SocialLinks from './SocialLinks'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Navigation />
      <SocialLinks />
      <main>{children}</main>
    </>
  )
} 