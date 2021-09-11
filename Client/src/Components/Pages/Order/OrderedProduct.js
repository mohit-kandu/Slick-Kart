import React from "react"
import './OrderedProducts.css'
export default function OrderedProduct({ title, image, price, category }) {
    return (
        <div>
            <div className="ordered_products">
                <img src={image} alt={title} />
                <div>
                    <h1>{title}</h1>
                    <h1 style={{ color: 'grey', textTransform: 'capitalize' }}>{category}</h1>
                </div>
                <h3>₹{price}</h3>
            </div>
        </div>
    )
}
