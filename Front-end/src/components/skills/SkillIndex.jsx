import { useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SkillContext from '../Context/SkillContext';
import { Header } from '../Header';

export const SkillIndex = () => {
    const { skills, fetchSkills, deleteSkill } = useContext(SkillContext);
    useEffect(() => {
        fetchSkills([]);
    }, []);

  return (
    <>
    <Header />
    <div className='mt-16'>
        <div className='flex justify-end m-2 p-2'>
            <Link className='my-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md' to='/skills/create'>Create New Skill</Link>
        </div>
        <div className="relative overflow-x-auto">
            <table className="w-full text-center text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Slug
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map((item, index) => {
                        return (
                        <tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                            <td className="px-6 py-4 whitespace-nowrap">{item.skillName}</td>
                            <td className="px-6 py-4"><p className='truncate w-60 text-left text-lightBlack capitalize'>{item.slug}</p></td>
                            <td className='py-4 px-6'>
                                <Link to={`/skills/${item.id}/edit`} className='mr-2 px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md'>Edit</Link>
                                <button onClick={() => deleteSkill(item.id)} className='px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md'>Delete</button>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}
