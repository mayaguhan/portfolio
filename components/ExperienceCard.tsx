'use client'

import { urlFor } from '@/sanity'
import { Experience } from '@/typings'
import { motion } from 'framer-motion'

type Props = {
    experience: Experience
}

function ExperienceCard({ experience }: Props) { 
  return (
    <article className='flex flex-col rounded-lg items-center space-y-3 md:space-y-6 flex-shrink-0 w-screen md:w-[600px] xl:w-[900px] snap-start bg-[#292929] p-0 xl:p-10 hover:opacity-100 opacity-40 cursor-pointer duraition-200 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity:  1,
                y: 0
            }}
            viewport={{
                once: true
            }}

            className="md:w-32 md:h-32 w-[100px] h-[100px] rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center mt-5"
            src={urlFor(experience?.companyImage).url()}
            alt=""
        />

        <div className='px-4 md:px-10 overflow-y-scroll'>
            <h4 className='xl:text-4xl md:text-2xl text-xl font-light'>
                {experience?.jobTitle}
            </h4>
            <p className='font-bold xl:text-2xl md:text-xl text-lg mt-1'>
                {experience?.company}
            </p>
            <div className='flex space-x-2 my-2'>
                {experience?.technologies?.map((technology, index) => (
                    <img key={technology._id} className='md:h-10 md:w-10 h-5 w-5 rounded-full' src={urlFor(technology.image).url()}  />
                ))}
            </div>
            <p className='uppercase pb-3 md:py-5 text-gray-300 text-sm'>
                {new Date(experience?.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience?.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-4 ml-5 text-sm xl:text-md w-4/5'> 
                {experience?.points?.map((point, index) => (
                    <li
                        key={index}
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard