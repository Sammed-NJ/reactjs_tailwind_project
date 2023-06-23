import React from 'react'

const Featured = () => {
    return (
        <div>

            <div className='h-[600px] flex justify-center bg-green-900 text-white'>
                <div className='w[1400px] flex items-center'>
                    <div className='content'>
                        <h1>Find the right freelance service, right away</h1>
                        <div className='search'>
                            <div className='searchInput'>
                                <img src='../../../public/img/search.png' href='' />
                                <input type='text' placeholder='Try "building mobile app"'></input>
                            </div>
                            <button>Search</button>
                        </div>
                        <div className='popular'>
                            <span>Popular: </span>
                            <button>Web Developer</button>
                            <button>WordPress</button>
                            <button>Artiest</button>
                            <button>Video Editor</button>
                        </div>
                    </div>
                    <div className='img'>
                        <img src='../../../public/img/portrait_1.png' href='portrait' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured