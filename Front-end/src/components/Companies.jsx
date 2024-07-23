import React from 'react';
import cote from '../assets/images/cote.svg'
import ge from '../assets/images/ge.svg'
import lilly from '../assets/images/lilly.png'
import microsoft from '../assets/images/microsoft.svg'

export const Companies = () => {
  return (
    <div className="mt-12 border-y border-gray-100 py-8 text-center bg-white dark:border-gray-800 md:py-12 xl:mt-20 px-10">
        <a href="customers.html" className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white">TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES</a>
        <div className="mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24">
            <img className="h-8 w-auto lg:h-10 lg:w-auto" src={cote} loading="lazy" alt="airbnb" />
            <img className="h-8 w-auto lg:h-10 lg:w-auto" src={ge} loading="lazy" alt="bissell" />
            <img className="h-8 w-auto lg:h-10 lg:w-auto" src={lilly} loading="lazy" alt="ge" />
            <img className="h-8 w-auto lg:h-10 lg:w-auto" src={microsoft} loading="lazy" alt="lilly" />
        </div>
    </div>
  )
}
