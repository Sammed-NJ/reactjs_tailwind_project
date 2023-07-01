// import React from 'react'
import Featured from '../components/Featured'
import TrustedBy from '../components/TrustedBy'
import Slide from '../components/Slide'
import { cards } from '../../data';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
    return (
        <div>
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card => (
                    <CategoryCard item={card} key={card.id} />
                ))}
            </Slide>
            <div className='bg-gray-200 flex justify-center p-[100px]'>
                <div className='flex items-center gap-[200px]'>
                    <div className='order-2 flex-col gap-4'>
                        <h1 className='font-medium mb-3 text-3xl'>The best part? Everything.</h1>
                        <div className='flex items-center gap-3 font-medium text-lg text-gray-800'>
                            <img className='w-6 h-6' src='/img/check.png' alt='' />
                            Stick to your budget
                        </div>
                        <p className='text-lg font-light text-gray-500'>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                        <div className='flex items-center gap-3 font-medium text-lg text-gray-800'>
                            <img className='w-6 h-6' src='/img/check.png' alt='' />
                            Get quality work done quickly
                        </div>
                        <p className='text-lg font-light text-gray-500'>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                        <div className='flex items-center gap-3 font-medium text-lg text-gray-800'>
                            <img className='w-6 h-6' src='/img/check.png' alt='' />
                            Pay when you&apos;re happy
                        </div>
                        <p className='text-lg font-light text-gray-500'>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                        <div className='flex items-center gap-3 font-medium text-lg text-gray-800'>
                            <img className='w-6 h-6' src='/img/check.png' alt='' />
                            Count on 24/7 support
                        </div>
                        <p className='text-lg font-light text-gray-500'>Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </div>
                    <divo className='order-3'>
                        <video className='w-[720px]' src='/img/video.mp4'></video>
                    </divo>
                </div>
            </div>
        </div>
    )
}

export default Home