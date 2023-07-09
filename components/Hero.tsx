'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import guhan from '../assets/guhan.jpg'
import Link from 'next/link'

function Hero() {
    const [text,count] = useTypewriter({
        words: [
            "Hi! My Name Is Guhan",
            "Building the future, one line at a time",
            "<NeverEndingLearning />"
        ],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        {/* <BackgroundCircles /> */}
        <Image 
            src={guhan}
            alt='Guhan'
            width={300}
            height={300}
            className="relative rounded-full mx-auto object-cover h-40 w-40"
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software Engineer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span> 
                <Cursor cursorColor='#F7AB0A' />
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero