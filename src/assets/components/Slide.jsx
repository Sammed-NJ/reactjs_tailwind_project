import React from 'react'
import Slider from 'infinite-react-carousel';
import { cards } from '../../data';
import CategoryCard from './CategoryCard';

const Slide = () => {
    return (
        <div>
            <div>
                <Slider>
                    {cards.map(card => (
                        <CategoryCard card={card} key={card.id} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Slide