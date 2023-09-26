import Navbar from '@/components/Navbar'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'
import UserProvider from '@/context/userProvider';

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className=' text-white bg-black '>
        <div className={inter.className}>
          <UserProvider>
            <ToastContainer />
            <Navbar />
            {children}
            <Footer />
          </UserProvider>
        </div>
      </body>
    </html>
  )
}
