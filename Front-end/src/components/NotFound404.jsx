import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const NotFound404 = () => {
  return (
    <>
      <Header />
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 mt-16 h-80 flex justify-center items-center">
        <h1 className='text-center text-2xl dark:text-white xl:text-5xl sm:text-4xl'>Noting To Found</h1>
      </div>
      <Footer />
    </>
  )
}
