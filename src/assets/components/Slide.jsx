import React from 'react'
import Slider from 'infinite-react-carousel';


const Slide = ({ children, slidesToShow, arrowsScroll }) => {
    return (
        <div className='flex justify-center py-[100px]'>
            <div className='container'>
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                    {children}
                </Slider>
            </div>
        </div>
    );
};

export default Slide


