'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from '@/components/ui/logo'
import Image from 'next/image'

import logoImage from '@/public/images/logo.png'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from '@/components/ui/mobile-menu'

export default function PricingCard() {

  return (
    <div className="border-greens-500 rounded-2xl border-2 divide-y divide-greens-400 max-w-sm mx-auto mt-5 shadowBox glassBlur" data-aos="zoom-y-out" data-aos-delay="550">
    <div className="p-6 rounded-2xl">
        <div className="flex justify-between">
            <h2 className="text-lg font-semibold text-greens-400">Standard</h2>
        </div>
        <p className="mt-0.5 text-sm text-greens-400">Our Business/Startup use case</p>
        <p className="mt-8"><span className="text-4xl font-bold tracking-tight text-gray-900">$49</span>
            <span className="text-base font-medium text-gray-700">/mo</span>
        </p>
        <a href="#" target="_blank"
            className="flex justify-center w-full py-3 mt-4 text-sm font-medium text-white bg-greens-300 rounded active:text-indigo-500 hover:bg-greens-400 hover:text-primary focus:outline-none focus:ring">Get
            started now</a>
    </div>
    <div className="px-6 pt-6 pb-8">
        <h3 className="text-sm font-medium text-gray-900">What's included</h3>
        <ul role="list" className="mt-6 space-y-4">
            <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        className="h-3 w-3 flex-shrink-0 text-green-500">
                        <path fillRule="evenodd"
                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>
                <span className="text-sm text-greens-500">5 workspaces</span>
            </li>
            <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        className="h-3 w-3 flex-shrink-0 text-green-500">
                        <path fillRule="evenodd"
                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>
                <span className="text-sm text-greens-500">Unlimited testimonials</span>
            </li>
            <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        className="h-3 w-3 flex-shrink-0 text-green-500">
                        <path fillRule="evenodd"
                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>
                <span className="text-sm text-greens-500">10 collection forms</span>
            </li>
            <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        className="h-3 w-3 flex-shrink-0 text-green-500">
                        <path fillRule="evenodd"
                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>
                <span className="text-sm text-greens-500">20 embeddable widgets</span>
            </li>
            <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        className="h-3 w-3 flex-shrink-0 text-green-500">
                        <path fillRule="evenodd"
                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>
                <span className="text-sm text-greens-500">White labeled widgets and forms</span>
            </li>
            <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        className="h-3 w-3 flex-shrink-0 text-green-500">
                        <path fillRule="evenodd"
                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>
                <span className="text-sm text-greens-500">Custom branding (logo, colors, etc...)</span>
            </li>
            <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        className="h-3 w-3 flex-shrink-0 text-green-500">
                        <path fillRule="evenodd"
                            d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>
                <span className="text-sm text-greens-500">2 members per workspace</span>
            </li>
        </ul>
    </div>
</div>
  )
}
