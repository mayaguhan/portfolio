'use client'

import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { Social } from '@/typings';
import { fetchSocials } from '@/utils/fetchSocials';
import { useEffect, useState } from 'react';


function Header() {

    const [socials, setSocials] = useState<Social[]>([]);

    useEffect(() => {
        async function getSocials() {
            const socials: Social[] = await fetchSocials();
            // console.log(socials);
            setSocials(socials);
        }
        getSocials();
    }, [])


  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0, 
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1
            }}
            className='flex flex-row items-center'
        >
            {socials.map((social: Social) => (
                <SocialIcon 
                    key={social._id}
                    url={social.url}
                    fgColor='gray'  
                    bgColor='transparent'
                />
            ))}
        </motion.div>

        
        <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0, 
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1
            }}    
            className='flex flex-row items-center text-gray-300 cursor-pointer'
        >
            <SocialIcon 
                className='cursor-pointer'
                network='email'
                fgColor='gray'  
                bgColor='transparent'
                url="#contact"
            />
            <a href="#contact" className='uppercase hidden md:inline-flex text-gray-400'>Get in touch</a>
        </motion.div>
    </header>
  )
}

export default Header