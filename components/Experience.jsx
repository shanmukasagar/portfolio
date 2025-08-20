"use client";
import React from 'react';
import data from "../data/data.json";

const Experience = () => {
  return (
    <div id='experience' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-4 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] mt-20'>Experience</p>
        <h2 className='py-4'>Where I've Worked</h2>
        <div className='flex flex-col gap-8'>
          {data.experience && data.experience.map((exp, index) => (
            <div 
              key={index} 
              className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-white'
            >
              <h3 className='text-xl md:text-2xl font-bold text-gray-800'>{exp.role}</h3>
              <p className='text-lg text-gray-600'>{exp.company}</p>
              <p className='text-sm text-gray-500 italic mb-4'>{exp.period}</p>
              <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                {exp.work.map((item, i) => (
                  <li key={i} className='leading-relaxed'>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
