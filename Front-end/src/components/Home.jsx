import React from 'react';
import { Header } from './Header';
import logo from '../assets/images/team.svg';
import { Footer } from './Footer';
import { Companies } from './Companies';
import { TrustedBy } from './TrustedBy';

export const Home = () => {
  return (
    <>
        <Header />
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 mt-16">
            <div className="px-2 py-12 gap-6 relative">
                    <h1 className='text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-left lg:text-7xl'>Design, Build,
                    <span className="relative">
                    <svg className="absolute inset-x-0 -bottom-1 w-full opacity-50" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 260 15.6">
                    </svg>
                        <span className='relative bg-gradient-to-r from-blue-500 from-20%  to-indigo-500 to-90%
                         to-secondaryLight bg-clip-text text-transparent dark:from-primaryLight dark:to-secondaryLight md:px-2'>
                            Scale
                        </span>
                    </span>
                    </h1>
                <div className='relative items-center gap-12 lg:flex'>
                    <div className='text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left'>
                        <p className='mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl'>
                            Our team is dedicated to creating innovative and user-centric digital products that enhance the lives of our clients. We work closely with designers, developers, and product managers to deliver high-quality products that meet the needs of our clients' users.
                        </p>
                        <form className="mt-12">
                            <div className='relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3'>
                                <div className='py-3 pl-4 lg:pl-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-6 w-6 fill-gray-500 dark:fill-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </div>
                                <input name='email' aria-label="your email" autoComplete="email" placeholder="Your mail address" className="w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none" type="email" />
                                <div className='md:pr-1.5 lg:pr-0 h-12'>
                                    <button type="submit" title="Start buying" className="relative w-16 ml-auto h-12 bg-blue-500 transition-colors duration-500 hover:bg-indigo-500 px-6 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative mx-auto h-6 w-6 text-white dark:text-gray-900">
                                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='mt-12 w-full overflow-hidden sm:mt-20 lg:-mt-8 lg:w-6/12'>
                        <img className='w-full' src={logo} alt="image_logo" />
                    </div>
                </div>
            </div>
        </div>
        <Companies />
        <TrustedBy />
        <Footer />
    </>
  )
}
