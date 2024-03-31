import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar'


const syne = Syne({ subsets: ['latin'], weight:['400','500','600','700','800'] })

export const metadata: Metadata = {
  title: 'Ananya Singh',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${syne.className} md:flex font-bold`}>
    <main className=' md:w-[20%]'>
      <Navbar/>
    </main>

        <div className='md:w-[80%]'>

        {children}
        </div>
        
        </body>
    </html>
  )
}
