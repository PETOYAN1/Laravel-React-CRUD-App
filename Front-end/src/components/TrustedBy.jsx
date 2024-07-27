import React from 'react';
import airbnb from '../assets/images/airbnb.svg';
import ava2 from '../assets/images/avatar-2.webp';
import ava3 from '../assets/images/avatar-3.webp';
import ava4 from '../assets/images/avatar-4.webp';
import geIcon from '../assets/images/ge.svg'
import microsoftIcon from '../assets/images/microsoft.svg';

export const TrustedBy = () => {
  return (
    <section className="mb-28 mt-14">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-blue-900 dark:text-white md:text-4xl xl:text-5xl">Trusted by leaders</h2>
                    <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">A growing team doesn't need to mean growing pains. Privacy, and the right tool for every step of your journey - Jira Software friction - company size.</p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-slate-900 dark:bg-slate-950 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
                        <div className="flex h-full flex-col justify-center space-y-6 md:space-y-8">
                            <img className="mr-auto h-12 w-auto" src={microsoftIcon} loading="lazy" alt="microsoft" />
                            <p className="text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl">
                                <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <br />
                                <br />
                                Esse, sint sit aut ducimus ea ipsam velit saepe earum dolorem, dignissimos minima voluptate quo accusamus corporis, quaerat beatae aliquid. Impedit, accusamus. <span className="font-serif">"</span>
                            </p>
                            <div className="flex items-center gap-3">
                                <img className="h-12 w-12 rounded-full" src={ava2} loading="lazy" alt="user avatar" width="200" height="200" />
                                <div>
                                    <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Andy Doe</h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Product Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-slate-900 dark:bg-slate-950 dark:shadow-none">
                        <img className="h-12 w-auto" src={airbnb} loading="lazy" alt="airbnb" />
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-serif">"</span>Sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Provident, omnis ut, sapiente veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                        <div className="flex items-center gap-3 text-left">
                            <img className="h-12 w-12 rounded-full" src={ava3} alt="user avatar" width="200" height="200" loading="lazy" />
                            <div>
                                <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Janet Doe</h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">UX Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-slate-900 dark:bg-slate-950 dark:shadow-none">
                        <img className="h-12 w-auto" src={geIcon} loading="lazy" alt="ge" />
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-serif">"</span>Sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Provident, omnis ut, sapiente veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                        <div className="flex items-center gap-3 text-left">
                            <img className="h-12 w-12 rounded-full" src={ava4} alt="user avatar" width="200" height="200" loading="lazy" />
                            <div>
                                <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">John Doe</h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Product Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
