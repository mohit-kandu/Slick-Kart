import React from 'react'
// import Navbar from "../../Navbar/Navbar"
// import Category from "../../Category/Category"
import Footer from "../../Footer/Footer"
import { useGlobalContext } from '../../../context/context'
import "./ViewAll.css"

export default function ViewAll() {
    const { products } = useGlobalContext()
    return (
        <>
            <div className="all_items_container">
                <div className="all_items_header">
                    <h2>Best Sellers</h2>
                    <p>{products.length} items</p>
                </div>
                <div className="all_items">
                    {products.map(product => <div className="content_suggested_item" key={product.id}>
                        <img src={product.image} alt="product_thumbnail" />
                        <h4 id="all_items_name">{product.title}</h4>
                        <span>${product.price}</span>
                        {/* <p class="suggested_description">{product.description}</p> */}
                    </div>)}
                </div>
            </div>
            <Footer />
        </>
    )
}
