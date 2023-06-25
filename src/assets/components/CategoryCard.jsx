import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ item }) => {
    return (
        <Link to="/gigs?cat=design" className='block w-[252px] h-[344px] text-white rounded-md cursor-pointer relative'>
            <div className='w-[252px] h-[344px] text-white rounded-md cursor-pointer relative overflow-hidden'>
                <img className='w-full h-full object-cover' src={item.img} href={item.desc} />
                <span className='font-light absolute top-4 left-4'>{item.desc}</span>
                <span className='font-medium text-2xl absolute top-10 left-4'>{item.title}</span>
            </div>
        </Link>
    )
}

export default CategoryCard
