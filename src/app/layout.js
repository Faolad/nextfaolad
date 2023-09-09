import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar.jsx'
import Footer from '@/components/footer/Footer.jsx'
import {ThemeProvider } from '../context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'devFaolad',
  description: 'This is faolad website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='max-w-7xl my-0 mx-auto pt-0  px-14 flex flex-col  min-h-screen justify-between '>
              <div className='h-full w-full'><Navbar /></div>
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
        
        
      </body>
    </html>
  )
}
