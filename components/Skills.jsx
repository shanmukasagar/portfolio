import React from 'react';
import data from "../data/data.json"

const Skills = () => {
  return (
    <div id="skills" className="w-full p-8 md:p-16 py-16">
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center '>
            <p className=' text-xl uppercase tracking-widest text-[#5651e5] mt-20 '>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                { data && data.skills.map((skill, index) => (
                    <div key={index} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <div className='m-auto'>
                                <img src={skill.image} alt='/' width="64px" height="64px"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>{skill.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills