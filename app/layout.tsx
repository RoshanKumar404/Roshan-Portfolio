import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Roshan Kumar | Software Engineer',
  description: 'Software engineering portfolio for Roshan Kumar, focused on Java systems, React Native, Android, and backend development.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
