import Link from 'next/link';
import React from 'react';
import data from '../data/data.json'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-6 flex items-center py-16'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 '>
      <div className='col-span-2 mt-20 lg:mt-2'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
          About
        </p>
        <h2 className='py-4'>Who I Am</h2>
        <p className='py-2 text-gray-600'>{data.about.aboutme1}        
        </p>
        <p className='py-2 text-gray-600'>
        {data.about.aboutme2}
        </p>
        <Link href='/#projects'>
          <p className='py-3 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </Link>
      </div>
      <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-full p-1 hover:scale-105 ease-in duration-300'>
        <img src={data.about.profile} className='rounded-full' alt='/' />
      </div>
    </div>
  </div>
  )
}

export default About