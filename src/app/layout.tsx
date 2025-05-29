import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

export const metadata: Metadata = {
  title: 'Suman Mandava | Portfolio',
  description: 'Software Engineer specializing in building exceptional digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
