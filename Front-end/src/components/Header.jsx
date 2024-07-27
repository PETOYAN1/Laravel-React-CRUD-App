import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CodeBracketIcon, Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        {text: 'Home', path: '/'},
        {text: 'Skills', path: '/skills'},
    ];

    // Add Dark Mode

    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        if(theme === 'dark') {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem('theme', theme);
    }, [theme,colorTheme]);
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10 dark:bg-black'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 dark:bg-slate-950'>
            {/* Logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <CodeBracketIcon className='w-7 h-7 text-blue-600'/>
                <Link to={'/'}><span className='dark:text-white'>Code</span></Link>
            </div>
            {/* Burger Menu icon */}
            <div onClick={()=>setIsOpen(!isOpen)} className='absolute right-8 flex top-6 cursor-pointer md:hidden w-7 h-7 dark:text-white'>
                {
                    isOpen ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* Link items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white dark:bg-slate-950 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
                {
                    links.map((link, index) => (
                        <li key={index} className='md:ml-8 md:my-0 my-7'>
                        <Link to={link.path} className='text-gray-800 hover:text-blue-400 dark:hover:text-blue-500 duration-500 dark:text-white'>{link.text}</Link>
                    </li>))
                }
            {/* Dark button */}
            {
                theme === 'light'?
                <MoonIcon onClick={toggleTheme} className='md:ml-7 w-9 h-9 p-[7px] rounded-full bg-slate-100 md:border-solid border border-gray fill-gray-500 hover:fill-blue-600
                                    cursor-pointer hover:transform-gpus
                                    hover:md:-rotate-90 transition duration-300 ease-in-out'/>
                :
                <SunIcon onClick={toggleTheme} className='md:ml-7 w-9 h-9 p-[7px] rounded-full bg-slate-100 md:border-solid border border-gray fill-gray-500 hover:fill-blue-600
                cursor-pointer hover:transform-gpu
                hover:md:-rotate-90 transition duration-300 ease-in-out'/>
            }
            </ul>
           </div>
        </div>
    );
}
