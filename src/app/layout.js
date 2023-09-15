import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className=' text-white bg-black '    >

        <div className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
