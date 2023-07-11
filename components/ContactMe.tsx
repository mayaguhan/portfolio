'use client'

import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}

function ContactMe({}: Props) {

    const { register, handleSubmit} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto: i.am.maya.guhan@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
    }



  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl text-xl">
            Contact
        </h3>

        <div className='flex flex-col xl:space-y-10 space-y-5 w-screen sm:mt-12 mt-10'>
            <h4 className='lg:text-4xl md:text-3xl text-2xl font-semibold text-center px-5'>
                I am the person that you are looking for. {" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
            </h4>

            <div className='md:space-y-10 space-y-3'>
                <div className='flex items-center space-x-2 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='md:text-2xl text-xl'>i.am.maya.guhan@gmail.com</p>
                </div>
                <div className='flex items-center space-x-2 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='md:text-2xl text-xl'>Singapore</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-3/4 mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput w-1/2' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput w-1/2' type="email" />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe