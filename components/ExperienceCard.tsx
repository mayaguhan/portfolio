'use client'

import { motion } from 'framer-motion'

function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center  bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer duraition-200 overflow-hidden'>
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

            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="https://media.licdn.com/dms/image/C560BAQE52fW7I3y3Hg/company-logo_200_200/0/1601257212168?e=2147483647&v=beta&t=jdCDOjjCFX1J4hWffakNfVh7PdJh8kd64jgRmzrJGw4"
            alt=""
        />

        <div className='px-0 md:px-10 h-[300px] overflow-y-scroll'>
            <h4 className='text-4xl font-light'>
                Full Stack Developer Intern
            </h4>
            <p className='font-bold text-2xl mt-1'>
                Challenger Technologies Limited
            </p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src="https://icons-for-free.com/iconfiles/png/512/super+tiny+icons+vue-1324450793910827375.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://logowik.com/content/uploads/images/javascript.jpg" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://asset.brandfetch.io/ide68-31CH/idlxAUbIOo.jpeg" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>
                May 2021 - Dec 2021
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>
                    Designed and developed custom functionalities and features for a human resource application to meet precise functional specifications and align with business requirements    
                </li> 
                <li>
                    Built and implemented the user interface using Vue.JS, HTML5, CSS, and JavaScript, resulting in a responsive and user-friendly interface
                </li> 
                <li>
                    Developed RESTful APIs using PHP and Laravel framework, optimizing performance and ensuring seamless integration with other systems
                </li> 

            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard