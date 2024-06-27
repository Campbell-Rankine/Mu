"use client";
import Footer from '@/components/ui/signinFooter'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })
  return (
    <main className="grow bg-header">

      {children}
      <Footer />
    </main>
  )
}
