import Link from 'next/link';
import React from 'react';
import data from '../data/data.json'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-6 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 items-center'>
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
        <div className="w-[280px] h-[280px] mx-auto rounded-full overflow-hidden shadow-xl shadow-gray-400 hover:scale-105 duration-300">
          <img
            src={data.about.profile}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>


      </div>
    </div>
  )
}

export default About