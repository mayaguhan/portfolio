import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Experience, Project, Skill } from '@/typings'

const query = groq`
    *[_type == "experience"]{
        ...,
        technologies[]->
    }
`


type Data = {
    socials: Experience[]
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const experiences: Experience[] = await sanityClient.fetch(query)

    res.status(200).json({ experiences })
}