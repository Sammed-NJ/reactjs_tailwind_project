import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='py-[50px] px-[200px]'>
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='font-semibold'>Categories</h2>
                        <span><a className='footer-helper-links' href='#'>Graphics & Design</a></span>
                        <span><a className='footer-helper-links' href='#'>Digital Marketing</a></span>
                        <span><a className='footer-helper-links' href='#'>Writing & Translation</a></span>
                        <span><a className='footer-helper-links' href='#'>Video & Animation</a></span>
                        <span><a className='footer-helper-links' href='#'>Music & Audio</a></span>
                        <span><a className='footer-helper-links' href='#'>Programming & Tech</a></span>
                        <span><a className='footer-helper-links' href='#'>Data</a></span>
                        <span><a className='footer-helper-links' href='#'>Business</a></span>
                        <span><a className='footer-helper-links' href='#'>Lifestyle</a></span>
                        <span><a className='footer-helper-links' href='#'>Photography</a></span>
                        <span><a className='footer-helper-links' href='#'>End-to-End Projects</a></span>
                        <span><a className='footer-helper-links' href='#'>Sitemap</a></span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='font-semibold'>About</h2>
                        <span><a className='footer-helper-links' href='#'>Careers</a></span>
                        <span><a className='footer-helper-links' href='#'>Press & News</a></span>
                        <span><a className='footer-helper-links' href='#'>Partnerships</a></span>
                        <span><a className='footer-helper-links' href='#'>Privacy Policy</a></span>
                        <span><a className='footer-helper-links' href='#'>Terms of Service</a></span>
                        <span><a className='footer-helper-links' href='#'>Intellectual Property Claims</a></span>
                        <span><a className='footer-helper-links' href='#'>Investor Relations</a></span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='font-semibold'>Support</h2>
                        <span><a className='footer-helper-links' href='#'>Help & Support</a></span>
                        <span><a className='footer-helper-links' href='#'>Trust & Safety</a></span>
                        <span><a className='footer-helper-links' href='#'>Selling on Fiverr</a></span>
                        <span><a className='footer-helper-links' href='#'>Buying on Fiverr</a></span>
                        <span><a className='footer-helper-links' href='#'>Fiverr Guides</a></span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='font-semibold'>Community</h2>
                        <span><a className='footer-helper-links' href='#'>Customer Success Stories</a></span>
                        <span><a className='footer-helper-links' href='#'>Community Hub</a></span>
                        <span><a className='footer-helper-links' href='#'>Forum</a></span>
                        <span><a className='footer-helper-links' href='#'>Events</a></span>
                        <span><a className='footer-helper-links' href='#'>Blog</a></span>
                        <span><a className='footer-helper-links' href='#'>Influencers</a></span>
                        <span><a className='footer-helper-links' href='#'>Affiliates</a></span>
                        <span><a className='footer-helper-links' href='#'>Podcast</a></span>
                        <span><a className='footer-helper-links' href='#'>Invite a Friend</a></span>
                        <span><a className='footer-helper-links' href='#'>Become a Seller</a></span>
                        <span><a className='footer-helper-links' href='#'>Community Standards</a></span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='font-semibold'>More From Fiverr</h2>
                        <span><a className='footer-helper-links' href='#'>Fiverr Enterprise</a></span>
                        <span><a className='footer-helper-links' href='#'>Fiverr Business</a></span>
                        <span><a className='footer-helper-links' href='#'>Fiverr Pro</a></span>
                        <span><a className='footer-helper-links' href='#'>Fiverr Logo Maker</a></span>
                        <span><a className='footer-helper-links' href='#'>Get Inspired</a></span>
                        <span><a className='footer-helper-links' href='#'>Fiverr Select</a></span>
                        <span><a className='footer-helper-links' href='#'>ClearVoice <p className='text-sm text-gray-400'>Content Marketing</p></a></span>
                        <span><a className='footer-helper-links' href='#'>Fiverr Workspace <p className='text-sm text-gray-400'>Invoice Software</p></a></span>
                        <span><a className='footer-helper-links' href='#'>Learn <p className='text-sm text-gray-400'>Online Courses</p></a></span>
                        <span><a className='footer-helper-links' href='#'>Working Not Working</a></span>
                    </div>
                </div>
                <hr className='my-4'></hr>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center justify-between gap-5'>
                        <Link to='/'>
                            <span className='font-bold text-gray-500 text-3xl'>fiverr</span>
                            <span className='text-black text-3xl'>.</span>
                        </Link>
                        <p className='text-gray-500 font-medium mt-2'>© Fiverr International Ltd. 2023</p>
                    </div>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className='flex gap-2'>
                            <div className='footer-media-links'><img className='w-6 h-6' src='/img/twitter.png' alt='' /></div>
                            <div className='footer-media-links'><img className='w-6 h-6' src='/img/facebook.png' alt='' /></div>
                            <div className='footer-media-links'><img className='w-6 h-6' src='/img/linkedin.png' alt='' /></div>
                            <div className='footer-media-links'><img className='w-6 h-6' src='/img/pinterest.png' alt='' /></div>
                            <div className='footer-media-links'><img className='w-6 h-6' src='/img/instagram.png' alt='' /></div>
                        </div>
                        <div className='flex font-medium text-sm text-gray-500'>
                            <span className='flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-100 py-0 px-3 rounded-full'><img className='w-5 h-5' src='/img/language.png' alt='' /> English</span>
                            <span className='cursor-pointer flex justify-center items-center hover:bg-gray-100 py-0 px-3 rounded-full'>₹ INR</span>
                            <span className='ml-3 cursor-pointer rounded-full border border-gray-500 p-2 hover:border-white hover:bg-gray-100'><img className='w-5 h-5' src='/img/accessibility.png' alt='' /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer