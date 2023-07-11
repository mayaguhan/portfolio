'use client'

import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { useEffect, useState } from 'react'
import { Experience } from '@/typings'
import { fetchExperiences } from '@/utils/fetchExperiences'

function WorkExperience() {

    const [experiences, setExperiences] = useState<Experience[]>([] as Experience[]);

    useEffect(() => {

        async function getExperiences() {
            const experiences: Experience[] = await fetchExperiences();
            console.log(experiences);

            setExperiences(experiences);
        }

        getExperiences();

    }, [])


  return (
    <div
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full xl:px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl text-xl xl:block hidden">
            Experience
        </h3>



        <div
            className="w-full flex space-x-5 overflow-x-scroll p-5 xl:p-10 mt-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
        >
            {experiences.map((experience, index) =>(
                <ExperienceCard
                    key={index}
                    experience={experience}

                />
            ))}
        </div>
    </div>
  )
}

export default WorkExperience