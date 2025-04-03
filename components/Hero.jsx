"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {

  const imageRef  = useRef(null);
  useEffect(() => {
    const imageElement = imageRef.current;
    const handlerScroll = ()=>{
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if(scrollPosition>scrollThreshold){
        imageElement.classList.add("scrolled");
      }
      else{
        imageElement.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll",handlerScroll)
    return () => window.removeEventListener("scroll",handlerScroll)
  }, [])
  
  return (
    <section className='px-4  pb-18 overflow-hidden'>
      <div className='container mx-auto text-center'>
      <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finances <br /> with Intelligence
        </h1>
                <p className='text-xl text-gray-600 mb-8  max-w-2xl mx-auto'>{" "}
        An AI-powered financial management platform that helps you track,
        analyze, and optimize your spending with real-time insights.
        </p>
        <div className='flex justify-center items-center space-x-4'>
          <Link href="/dashboard">
          <Button size="lg" className="px-8">Get Started</Button>
          </Link>

          <Link href="https://github.com/UdaySharmaGitHub">
          <Button size="lg" variant={"outline"} className="px-8">Watch Demo</Button>
          </Link>
        </div>

        {/* image div */}
        <div className='hero-image-wrapper mt-3 md:mt-0'>
          <div ref={imageRef} className='hero-image'>
            <Image width={1280} height={720}
            className='rounded-lg border shadow-2xl mx-auto'
            src="/banner.jpeg" alt="Dashboard Preview"
            priority
            />
          </div>
        </div>
      </div>
      </section>
  )
}

export default Hero