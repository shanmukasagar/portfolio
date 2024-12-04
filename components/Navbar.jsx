"use client"; // Enable client-side rendering for the component

import React, { useState, useEffect } from 'react'; // React imports
import Link from 'next/link'; // Next.js Link component for client-side navigation

// Import icons from react-icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 
import { IoMdMail } from 'react-icons/io'; 
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


const Navbar = () => {

    const pathname = usePathname();

    const [sidebar, setSidebar] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');

    const router = useRouter();

     useEffect(() => {
        if ( pathname.startsWith('/project/')) {
        setNavBg('transparent');
        setLinkColor('#ecf0f3');
        } else {
        setNavBg('#ecf0f3');
        setLinkColor('#1f2937');
        }
  }, [pathname]);


    const handleSideBar = () => { // To open and close 
        setSidebar(!sidebar);
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true);
            }else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    },[])
  return (
    <div  style={{ backgroundColor: `${navBg}` }} className={ shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-3 2xl:px-16'>
         <h2 style={{ color: `${linkColor}` }}>Portfolio</h2>
         <div>
            <ul style={{ color: `${linkColor}` }} className=' hidden md:flex'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/#about'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/#skills'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/#projects'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href='/#contact'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div style={{ color: `${linkColor}` }} onClick={handleSideBar} className='md:hidden cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
         </div>
        </div>
        <div className= { sidebar ? 'fixed left-0 top-0 h-screen w-full bg-black/70' : ''}>
            <div className= {
                sidebar ? ' fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:W-[45%] bg-[#ecf0f3] p-10 ease-in duration-500 ' :
                           'fixed left-[-100%] top-0 p-10 ease-in duration-500 '
                }>
                <div>
                    <div className='flex w-full justify-between items-center'>
                        <h3>Portfolio</h3>
                        <div onClick={handleSideBar} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose  />
                        </div>
                    </div>
                    <div className='flex flex-col py-4'>
                        <ul className='uppercase '>
                            <Link  href='/'>
                                <li onClick={() => setSidebar(false)} className='text-sm py-4'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setSidebar(false)} className='text-sm py-4'>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setSidebar(false)} className='text-sm py-4'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setSidebar(false)} className='text-sm py-4'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setSidebar(false)} className='text-sm py-4'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn className='text-blue-700' />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub className='text-gray-800' />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <IoMdMail className='text-red-500' />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill className='text-black'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Navbar