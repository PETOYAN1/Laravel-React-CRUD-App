import { useContext, useEffect } from "react";
import SkillContext from "../Context/SkillContext";
import { Header } from "../Header";

export const SkillCreate = () => {
    const { formValue, onChange, storeSkill, errors, setErrors } = useContext(SkillContext);
    useEffect(() => {
        setErrors({});
    }, [setErrors]);
    
  return (
    <>
    <Header />
    <div className='mt-16 pt-[8em]'>
        <form onSubmit={storeSkill} className='max-w-md mx-auto p-6 bg-white dark:bg-slate-950 dark:text-white rounded-sm'>
            <div className='space-y-6'>
                <div className='mb-4'>
                    <label htmlFor="name" className='block mb-2 text-sm font-medium'>Name</label>
                    <input name="name" onChange={onChange} value={formValue['name']} placeholder='write name' id='name' className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' type="text" />
                    {errors.name && <span className="text-sm text-red-400">{errors.name[0]}</span>}
                </div>
                <div className='mb-4'>
                    <label htmlFor="slug" className='block mb-2 text-sm font-medium'>Skill</label>
                    <input name="slug" onChange={onChange} value={formValue['slug']} placeholder='write skill' id='slug' className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' type="text" />
                     {errors.slug && <span className="text-sm text-red-400">{errors.slug[0]}</span>}                   
                </div>
            </div>
            <div className="mt-5">
                <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">Create</button>
            </div>
        </form>
    </div>
    </>
  )
}
