'use client'

import { urlFor } from '@/sanity'
import { Project } from '@/typings'
import { fetchProjects } from '@/utils/fetchProjects'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {}

function Projects({}: Props) {

    const [projects, setProjects] = useState<Project[]>([] as Project[]);


    useEffect(() => {

        async function getProjects() {
            const projects: Project[] = await fetchProjects();
            console.log(projects);

            setProjects(projects);
        }

        getProjects();

    }, [])

  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl text-xl">
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden pb-10 snap-x snap-mandatory z-20 mt-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects.map((project,i) => (
                <div key={i} className='w-fit flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-0 xl:p-44 h-screen mt-10'>
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        viewport={{
                            once: true
                        }}

                        src={urlFor(project?.image).url()}
                        className="w-[50%]"
                        alt=""
                    />

                    <div className='xl:space-y-10 space-y-3 px-0 md:px-5 xl:px-10 max-w-6xl'>
                        <h4 className='xl:text-4xl lg:text-3xl text-2xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length}:</span>{" "}
                            {project?.title}
                        </h4>

                        <div className='flex flex-row space-x-2 items-center justify-center'>
                            {project?.technologies.map((tech,i) => ( 
                                <img
                                    key={tech?._id}
                                    src={urlFor(tech?.image).url()}
                                    className='h-10 w-10 rounded-full'

                                />
                            ))}
                        </div>

                        

                        <p className='lg:text-md xl:text-lg text-sm text-center md:text-left'>
                           {project?.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects