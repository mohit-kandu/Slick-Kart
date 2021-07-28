import React from 'react'
import CarouselData from "./Carousel_data"
import "./carousel.css"
import { Carousel } from 'react-responsive-carousel';

export default function MainCarousel() {
    return (
        <Carousel autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
        >
            {
                CarouselData.map(item =>
                    <div key={item.id} className="carousel_slide">
                        <img src={item.image} alt="carouel_thumbnail" className="slider_image" width="300px" />
                    </div>
                )
            }
        </Carousel>

    );
}



