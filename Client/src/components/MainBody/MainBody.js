import React from 'react'
import AdCarousel from "./Carousel/Carousel"
import Content1 from './Content/Content1/Content1'
// import Content2 from './Content/Content2/Content2'
import Offers from './Offers/Offers'
import Suggested from './Suggested/Suggested'

export default function MainBody() {
    return (
        <>
            <AdCarousel />
            <Suggested />
            <Offers />
            <Content1 title="Big Savings on your favourites" />
            {/* <Content1 title="Home Makeover" />
            <Content1 title="Men's Footwear" />
            <Content1 title="Furniture Bestsellers" /> */}
        </>
    )
}
