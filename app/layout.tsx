import './globals.css'
import type { Metadata } from 'next'
import { Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] ,variable: '--font-inter'});



export const metadata: Metadata = {
  title: 'FinFlow',
  description: 'FinFlow - Your Personal Finance Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
