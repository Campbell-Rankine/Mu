'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Image from 'next/image'

import logoImage from '@/public/images/logo.png'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

import { auth } from "@/app/api/firebase/firebaseConfig";
import { googleSignUp, gitHubSignUp, GitHubSignUpButton, GoogleSignUpButton, AccountInfoCard } from '../utils/authentication';


export const currentUser = auth.currentUser;

export default function Header() {

  const [top, setTop] = useState<boolean>(true)
  

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  // If user signed in, remove sign in buttons


  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-primary ${!top ? 'bg-header backdrop-blur-md shadow-lg' : ''}`}>
      <div className="max-w-8xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <a href='/'>
            <Image className="md:max-w-none mx-auto rounded opacity-70" src={logoImage} width={128} alt="logo" />
            </a>
          </div>

          {/* sign in */}
          <GitHubSignUpButton />
          <GoogleSignUpButton />
          <AccountInfoCard />
          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
