import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Project, Skill } from '@/typings'

const query = groq`
    *[_type == "project"]{
        ...,
        technologies[]->
    }
`


type Data = {
    socials: Project[]
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const projects: Project[] = await sanityClient.fetch(query)

    res.status(200).json({ projects })
}