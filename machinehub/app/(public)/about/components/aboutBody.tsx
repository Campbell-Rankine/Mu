'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'

export default function AboutPage() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative bg-header">
      
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      
      <div className="absolute inset-0 bg-header pointer-events-none mb-24"></div>
      
      {/* space*/}
        <div className="relative">
        <div className="emptyBackground blobScene">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 ">
        
        <div className="pt-12 md:pt-20 ">

          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pt-12 pb-12 md:pb-10">
            <h1 className="h2 mb-4 text-6xl text-gray-900" data-aos="zoom-y-out">ABOUT US</h1>
            <dl className="mt-16 mb-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-xl text-center sm:grid-cols-2 lg:grid-cols-4" data-aos="zoom-y-out" data-aos-delay="150">
              <div className="flex flex-col bg-greens-400 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-800">Active Users</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">12,345</dd>
              </div>
              <div className="flex flex-col bg-greens-400 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-800">Transactions Today</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">1.23M</dd>
              </div>
              <div className="flex flex-col bg-greens-400 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-800">Total Revenue</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">$5.6B</dd>
              </div>
              <div className="flex flex-col bg-greens-400 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-800">Happy Customers</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">98%</dd>
              </div>
            </dl>
            <p className="text-xl text-left text-gray-700 pt-5" data-aos="zoom-y-out" data-aos-delay="250">We're a small team of A.I. developers based out of Canberra Australia. Our model libraries are aimed at optimizing the Deep Learning research workflow. We provide tools to aid with experimentation, tools to play around with model behaviour, and our own optimization methods.</p>
          </div>



          <div className="max-w-7xl mb-24 ">
            <div className='max-w-6xl mx-auto text-left pt-12 md:pb-10' data-aos="zoom-y-out" data-aos-delay="350">
              <h1 className="h2 mb-4 text-gray-900">Our Mission</h1>
              <p className="text-xl text-gray-700 pt-5">Reduce unnecessary research time in paper to code implementations for A.I. developers. We want to provide developers with one solution for reporting, experimentation, research tracking, and model optimization</p>
            </div>
            
            <div className='max-w-6xl mx-auto text-left pt-6 pb-6 md:pb-10' data-aos="zoom-y-out" data-aos-delay="450">
            <h1 className="h2 mb-4 text-gray-900">Our Vision</h1>
            <p className="text-xl text-gray-700 pt-5">Reduce unnecessary research time in paper to code implementations for A.I. developers. We want to provide developers with one solution for reporting, experimentation, research tracking, and model optimization</p>
            </div>
          </div>

        </div>
      </div>
      </div>
      </div>
            
    </section>
  )
}