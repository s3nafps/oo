import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohamed Senator - IT Support Engineer',
  description: 'Portfolio website of Mohamed Senator, IT Support Engineer specializing in AD, Exchange, GPO, Firewall, PKI, ITSM, and network management.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

