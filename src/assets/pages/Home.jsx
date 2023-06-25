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
            <div>
                <div>
                    <div>
                        <h1>The best part? Everything.</h1>
                        <div>
                            <img src='/img/check.png' alt='' />
                            Stick to your budget
                        </div>
                        <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                        <div>
                            <img src='/img/check.png' alt='' />
                            Get quality work done quickly
                        </div>
                        <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                        <div>
                            <img src='/img/check.png' alt='' />
                            Pay when you&apos;re happy
                        </div>
                        <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                        <div>
                            <img src='/img/check.png' alt='' />
                            Count on 24/7 support
                        </div>
                        <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </div>
                    <div>
                        <video src='/img/video.mp4'></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home