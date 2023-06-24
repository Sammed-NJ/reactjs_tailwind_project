import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ card }) => {
    return (
        <Link to="/gigs?cat=design">
            <div className='w-[252px] h-[344px] text-white rounded cursor-pointer relative'>
                <img className='w-[100px] h-full object-cover' src={card.img} href={card.desc} />
                <span className='font-light absolute top-4 left-4'>{card.desc}</span>
                <span className='font-medium text-2xl top-10'>{card.title}</span>
            </div>
        </Link>
    )
}

export default CategoryCard