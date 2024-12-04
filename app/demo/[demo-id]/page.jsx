"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import data from '../../../data/data.json';


const Demo = () => {
    const params = useParams();
    const getId = params['demo-id'];

    const [project, setProject] = useState(null);

    useEffect(() => {
        if (getId) {
          const getProject = data.projects.find((project) => project.id === getId);
          setProject(getProject);
        }
      }, [getId]);
      console.log({demo:project})
  return (
    <div className='w-full'>
      {project && Object.keys(project).length > 0  && (
        <div className='w-full h-[50vh] relative'>
          <h1>{project && project.name} </h1>
          <h2 className='absolute top-28 left-20'>Hellgo;uhgnodfuhndpguohngohuljnvbofgu</h2>
        </div>
      )}
    </div>
  )
}

export default Demo;