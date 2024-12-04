import React from 'react';
import { FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import data from "../data/data.json";
import Link from 'next/link';

const Main = () => {
  return (
    <div  className='w-full h-screen text-center '>
        <div className='max-w-[1240px] w-full h-full mx-auto p-6 flex justify-center items-center'>
            <div className='mt-20 lg:mt-2'>
                <p className='uppercase tracking-widest text-gray-600'>LET&#39;S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>
                Hi, I&#39;m <span className='text-[#5651e5]'>{data.home.name}</span>
                </h1>
                <h1 className='py-2 text-gray-700'> {data.home.title} </h1>
                <p className='py-4 text-gray-600 sm:max-w-[74%] m-auto'> {data.home.desc}</p>                  
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href = {data.links.linkedin} target="_blank">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                            <FaLinkedinIn className='text-blue-700' />
                        </div>
                    </a> 
                    <a href = {data.links.github} target="_blank">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub className='text-gray-800' />
                        </div>
                    </a>
                    <a href={`mailto:${data.links.mail}`} >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <IoMdMail className='text-red-500' />
                        </div>
                    </a>
                    <a href={`tel:${data.links.phone}`} >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill className='text-black'/>
                        </div>
                    </a>
                </div>
                <Link href="/assets/sagar/resume.docx" target="_blank">
                    <button type="button" className="px-2 py-2 w-[180px] mt-6 cursor-pointer">Resume</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Main