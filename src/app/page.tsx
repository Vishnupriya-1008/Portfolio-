/* @reference "tailwindcss" */
'use client'

import ClientLayout from '../components/ClientLayout'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Work from '../components/Work'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <ClientLayout>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </ClientLayout>
  )
}
