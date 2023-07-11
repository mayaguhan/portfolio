'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { fetchSkills } from '@/utils/fetchSkills'
import Skill from '@/components/Skill'
import { Skill as SkillSet} from '@/typings'

function Skills() {

    const [skills, setSkills] = useState<SkillSet[]>([])



    useEffect(() => {

        async function getSkills() {
            const skills: SkillSet[] = await fetchSkills();
            console.log(skills)

            setSkills(skills)

        }

        getSkills()

    }, [])


  return (
    <motion.div
        className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl text-xl">
            Skills
        </h3>


        <h3 className='absolute top-36 uppercase tracking-[3px] text-sm text-gray-500'>
            Hover over a skill for proficiency
        </h3>

        <div className='grid grid-cols-3 gap-5 justify-center mt-20'>
            {skills?.slice(0, skills.length/2 ).map((skill,index) => (
                <Skill key={skill._id} skill={skill} />
            ))}

            {skills?.slice(skills.length/2, skills.length).map((skill,index) => (
                <Skill key={skill._id} skill={skill} directionLeft  />
            ))}
        </div>
    </motion.div>
  )
}

export default Skills