import React from 'react'

const TrustedBy = () => {
    return (
        <div className='bg-gray-100 h-[100px] flex justify-center'>
            <div className='w-[760px] flex gap-10 text-gray-400 justify-center items-center g-5 font-medium'>
                <span>
                    Trusted By:
                </span>
                <img className='h-[70px] object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" alt="" />
                <img className='h-[70px] object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" alt="" />
                <img className='h-[70px] object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" alt="" />
                <img className='h-[70px] object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt="" />
                <img className='h-[70px] object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" alt="" />
            </div>
        </div>
    )
}

export default TrustedBy