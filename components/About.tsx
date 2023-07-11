'use client'

import { motion } from 'framer-motion'
import guhan from '../assets/guhan_3.jpg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'


function About() {

    const [pageInfo, setPageInfo] = useState<PageInfo>({} as PageInfo);


    useEffect(() => {

        async function getPageInfo() {
            const pageInfo: PageInfo = await fetchPageInfo();
            console.log(pageInfo);
            setPageInfo(pageInfo);
        }

        getPageInfo();
    }, [])

  return (
    <motion.div
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1.5
        }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl text-xl">
            About
        </h3>


        <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            animate={{
                x: 0
            }}
            whileInView={{
                opacity:  1,
                x: 0
            }}
            transition={{
                duration: 1.2
            }}
            viewport={{
                once: true
            }}
            src="https://i.ibb.co/85kctsf/guhan-3.jpg"
            width={600}
            height={500}
            className='-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-3 px-0 md:px-10'>
            <h4 className='xl:text-4xl lg:text-3xl text-2xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background</h4>
            <p className='text-xs md:text-base'>
                {pageInfo.backgroundInformation}
            </p>
        </div>



    </motion.div>
  )
}

export default About