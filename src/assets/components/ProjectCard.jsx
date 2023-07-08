import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ item }) => {
    return (
        <Link to="/">
            <div className='w-[300px] h-[300px] rounded overflow-hidden cursor-pointer shadow-2xl'>
                <img src={item.img} alt={item.id} className='w-full h-3/4 object-cover' />
                <div className='flex items-center gap-5 p-3'>
                    <img src={item.pp} alt='' className='w-10 h-10 rounded-full object-cover' />
                    <div className=''>
                        <h3 className='text-base font-medium'>{item.cat}</h3>
                        <span className='text-sm text-gray-500'>{item.username}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard
