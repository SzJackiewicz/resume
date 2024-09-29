import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Szymon Jackiewicz',
  description: 'Resume',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} min-w-[370px] justify-center bg-slate-900 p-2 leading-relaxed text-slate-300 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <div className='blob blur-[120px]' />
        <div className='blob2 blur-[100px]' />
        {children}
      </body>
    </html>
  )
}
