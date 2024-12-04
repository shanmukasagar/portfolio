"use client";
import React from 'react';
import data from "../data/data.json";
import { useRouter } from 'next/navigation';

const Projects = () => {
  const router = useRouter();

  const handleRouter = (url) => {
    router.push(url)

  }
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-4 py-16  '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] mt-20 '>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {data && data.projects.map((project, index) => (
            <div key={index} className='relative  p-4 flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'            >
              <img className='rounded-xl group-hover:opacity-10 ' src={project.image}   />
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-lg text-white tracking-wider text-center md:text-2xl'>{project.name}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{project.title}</p>
                <p  onClick={() => handleRouter(project.url)} className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-sm  md:text-lg cursor-pointer'>More Info</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
