// import React from 'react'

const Featured = () => {
    return (
        <div>

            <div className='h-[600px] flex justify-center bg-green-950 text-white'>
                <div className='w[1400px] flex items-center'>
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-5xl font-medium styler-text-h1'>Find the right <span className='styler-text'>freelance <br /> service</span>, right away</h1>
                        <div className='flex items-center justify-between bg-white rounded w-[700px]'>
                            <div className='flex items-center gap-3'>
                                <img className='w-5 h-5 m-3' src='/img/search.png' href='' />
                                <input className='border-none outline-none text-black' type='text' placeholder='Try "building mobile app"'></input>
                            </div>
                            <button className='w-32 h-12 border-none hover:bg-green-500 bg-green-600 text-white cursor-pointer'>Search</button>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span>Popular: </span>
                            <button className='popular-btn'>Web Developer</button>
                            <button className='popular-btn'>WordPress</button>
                            <button className='popular-btn'>Artiest</button>
                            <button className='popular-btn'>Video Editor</button>
                        </div>
                    </div>
                    <div>
                        <img className='h-full object-contain' src='/img/man.png' href='portrait' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured