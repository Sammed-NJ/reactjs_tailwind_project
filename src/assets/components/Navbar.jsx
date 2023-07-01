import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [active, setActive] = useState(false); // State variable to track if navbar is active
    const [open, setOpen] = useState(false); // State variable to track if user options dropdown is open

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false); // Check if user has scrolled down and update active state accordingly
    }

    useEffect(() => {
        // Add event listener to track scroll position and update active state
        window.addEventListener("scroll", isActive);
        return () => {
            // Clean up event listener when component unmounts
            window.removeEventListener("scroll", isActive);
        }
    }, []);

    const currentUser = {
        id: 1,
        username: "Jone Doe",
        isSeller: true
    }

    return (
        <div className={`navbar ${active ? "bg-white text-black" : "bg-green-950 text-white"} sticky top-0 flex items-center flex-col transition-all duration-200 ease-in z-50`} >
            <div className='w-4/5 flex justify-between py-4 '>
                <div className='text-4xl'>
                    <Link to='/'>
                        <span className='font-bold'>fiverr</span>
                        <span className='text-green-600'>.</span>
                    </Link>
                </div>
                <div className='flex gap-4 items-center font-medium'>
                    <ul className='flex gap-4 items-center relative'>
                        <li className='cursor-pointer'>Fiverr Business</li>
                        <li className='cursor-pointer'>Explore</li>
                        <li className='cursor-pointer flex items-center gap-1'><img className='w-4 h-4' src='/img/language.png' alt='select_language' /> English</li>
                        <li className='cursor-pointer'>Sign in</li>
                        {!currentUser?.isSeller && <li> Become a Seller</li>}
                        {currentUser && (
                            <li className='user flex items-center justify-center cursor-pointer' onClick={() => setOpen(!open)}>
                                <img src="/img/account.png" alt="user_icon" className='w-7 h-7' />
                                <span>{currentUser?.username}</span>
                                {open && <div className='options p-3 absolute top-12 right-2 rounded bg-gray-50 w-[200px] overflow-hidden'>
                                    <ul className='text-gray-500 text-sm font-normal flex flex-col gap-3'>
                                        {
                                            currentUser?.isSeller && (
                                                <>
                                                    <Link to="/myGigs" className='cursor-pointer'>Gigs</Link>
                                                    <Link to="/add" className='cursor-pointer'>Add Gigs</Link>
                                                </>
                                            )
                                        }
                                        <Link to="/orders" className='cursor-pointer'>Orders</Link>
                                        <Link to="/messages" className='cursor-pointer'>Messages</Link>
                                        <Link to="/" className='cursor-pointer'>Logout</Link>
                                    </ul>
                                </div>}
                            </li>
                        )}
                    </ul>
                    {!currentUser && <button className={`${active ? "border-green-600 text-green-600 hover:text-white" : "border-white"} border-2  rounded py-1 px-3 bg-transparent hover:bg-green-600 hover:border-green-600 cursor-pointer`}>Join</button>}
                </div>
            </div>
            {
                active && (
                    <>
                        <hr className='w-full h-0 border-1 border-gray-200' />
                        <div className='w-4/5 text-sm'>
                            <ul className=' flex justify-between items-center py-4 '>
                                <li>Graphic & Design</li>
                                <li>Video & Animation</li>
                                <li>Writing & Translation</li>
                                <li>AI Services</li>
                                <li>Digital Marketing</li>
                                <li>Music & Audio</li>
                                <li>Programming & Tech</li>
                                <li>Business</li>
                                <li>Lifestyle</li>
                            </ul>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Navbar
