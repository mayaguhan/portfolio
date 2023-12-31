import { urlFor } from '@/sanity'
import { Skill } from '@/typings'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean,
    skill: Skill
}

function Skill({ directionLeft , skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -100 : 100,
                opacity: 0
            }}
            transition={{
                duration: 0.5
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            src={urlFor(skill?.image).url()}
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out md:block hidden'
        />
        <img
            src={urlFor(skill?.image).url()}
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out md:hidden'
        
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:h-32 xl:w-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                    {skill?.progress}%
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default Skill