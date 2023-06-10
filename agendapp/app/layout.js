'use client'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AgendAppp',
  description: 'Agenda citas fácil y rapido sin tener que hacer filas',
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <ToastContainer />
      </body>
    </html>
  )
}
