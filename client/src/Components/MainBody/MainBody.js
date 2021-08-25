import React from 'react'
import AdCarousel from "./Carousel/Carousel"
import Content1 from './Content/Content1/Content1'
import Content2 from './Content/Content2/Content2'
// import Content2 from './Content/Content2/Content2'
import Offers from './Offers/Offers'
import Suggested from './Suggested/Suggested'

export default function MainBody() {
    return (
        <div className="main_body_container">
            <AdCarousel />
            <Suggested />
            <Offers />
            <Content1 title="Big Savings on your favourites" />
            {/* <Content2 title="Footwear" /> */}
        </div>
    )
}
