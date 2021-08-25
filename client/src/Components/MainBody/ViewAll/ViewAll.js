import React from 'react'
import Footer from "../../Footer/Footer"
import { useGlobalContext } from '../../../Context/Context'
import "./ViewAll.css"
import { Link } from "react-router-dom"

export default function ViewAll() {
    const { productsClothing: products } = useGlobalContext()
    return (
        <>
            <div className="all_items_container">
                <div className="all_items_header">
                    <h2>Best Sellers</h2>
                    <p>{products.length} items</p>
                </div>
                <div className="all_items">
                    {products.map(product => <div className="content_suggested_item" key={product._id}>
                        <Link style={{ textDecoration: "none", color: "black" }} to={{ pathname: `/singleItem/${product._id}` }} >

                            <img src={product.image} alt="product_thumbnail" />
                            <h4 id="all_items_name">{product.title}</h4>
                            <span>${product.price}</span>
                            {/* <p class="suggested_description">{product.description}</p> */}
                        </Link>
                    </div>)}
                </div>
            </div>
            <Footer />
        </>
    )
}
