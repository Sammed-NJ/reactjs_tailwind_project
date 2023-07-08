// import React from 'react'
import Featured from '../components/Featured'
import TrustedBy from '../components/TrustedBy'
import Slide from '../components/Slide'
import { cards } from '../../data';
import CategoryCard from '../components/CategoryCard';
import { projects } from '../../data';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
    return (
        <div className='font-work-sans'>
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card => (
                    <CategoryCard item={card} key={card.id} />
                ))}
            </Slide>
            <div className='bg-gray-200 flex justify-center p-[100px]'>
                <div className='flex items-center gap-[100px]'>
                    <div className='order-2 flex flex-col gap-2 w-[500px]'>
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
                    <div className='order-3'>
                        <video className='w-[720px] rounded' src="/img/Expand Your Team _ Fiverr.mp4" controls>
                        </video>
                    </div>
                </div>
            </div>
            <div className='bg-blue-950 flex justify-center p-[100px]'>
                <div className='flex items-center gap-[100px]'>
                    <div className='order-2 flex flex-col gap-5 w-[500px]'>
                        <h1 className=' mb-3 text-3xl text-white'>Fiver <span className='font-light'>business.</span> <span className='bg-blue-600 text-sm px-1 py-[2px] rounded-full uppercase mb-10'>new</span></h1>
                        <h1 className='font-medium mb-3 text-3xl text-white'>A solution built for <span className='font-playfair-display'>business</span></h1>
                        <p className='text-lg font-medium text-white'>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-3 font-normal text-lg text-white'>
                                <img className='w-6 h-6' src='/img/check.png' alt='' />
                                Talent matching
                            </div>
                            <div className='flex items-center gap-3 font-normal text-lg text-white'>
                                <img className='w-6 h-6' src='/img/check.png' alt='' />
                                Dedicated account management
                            </div>
                            <div className='flex items-center gap-3 font-normal text-lg text-white'>
                                <img className='w-6 h-6' src='/img/check.png' alt='' />
                                Team collaboration tools
                            </div>
                        </div>
                        <div className='mt-9 flex items-center gap-3 font-medium text-lg text-white'>
                            <button className='bg-green-500 py-2 px-3 text-base rounded cursor-pointer hover:bg-green-600'>Explore Fiverr Business</button>
                        </div>
                    </div>
                    <div className='order-3'>
                        <img className='w-[720px]' src='/img/business-desktop-870-x1.png' />
                    </div>
                </div>
            </div>
            <Slide slidesToShow={4} arrowsScroll={4}>
                {projects.map(project => (
                    <ProjectCard item={project} key={project.id} />
                ))}
            </Slide>
        </div>
    )
}

export default Home