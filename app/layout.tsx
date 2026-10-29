import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
// Order matters: later files win ties in the cascade.
import './globals.css'                     // Tailwind + shadcn theme variables
import './styles/tokens.css'               // colors, fonts, spacing
import './styles/site-chrome.css'          // header, mobile drawer, footer
import './styles/home.css'                 // home page sections
import './styles/case-study.css'           // project detail pages

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'Gizem Bolayir - Product & UX/UI Designer',
  description: 'Portfolio of Gizem Bolayir, a Product & UX/UI Designer with an Engineering Mindset',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
