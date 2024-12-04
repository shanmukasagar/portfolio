"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import data from '../../../data/data.json';
import { useRouter } from 'next/navigation';

const Project = () => {
  const params = useParams();
  const router = useRouter();
  const getId = params['project-id'];

  const [project, setProject] = useState(null);

  useEffect(() => {
    if (getId) {
      const getProject = data.projects.find((project) => project.id === getId);
      setProject(getProject);
    }
  }, [getId]);

  const handleRouter = (url) => {
    router.push(url)
  }

  return (
    <div className='w-full'>
      {project && Object.keys(project).length > 0 && (
        <div>
          <div className='w-full h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
            <Image
              className='absolute z-1'
              layout='fill'
              objectFit='cover'
              src={project.image}
              alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>{project.name || 'Project Name'}</h2>
              <h3>{project.stack}</h3>
            </div>
          </div>

          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
              <p>Project</p>
              <h2>Overview</h2>
              <p>{project.description || 'Project description goes here...'}</p>
              <a href={project.githubLink || '#'} target='_blank' rel='noreferrer'>
                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
              </a>
              { project.demo && false && (
                 <button onClick={() => handleRouter(project.demo)} className='px-8 py-2 mt-4'>Demo</button>
              )}
            </div>

            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
              <div className='p-3'>
                <p className='text-start font-bold pb-2 '>Technologies</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                  {project.technologies && project.technologies.map((tech, index) => (
                    <p key={index} className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1' /> {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <Link href='/#projects'>
              <p className='underline cursor-pointer'>Back</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
