import React from 'react'
import { Link } from "react-router-dom"

export default function Item(props) {
    const { _id, title, price, image } = props.product

    return <Link to={{ pathname: `/singleItem/${_id}` }} style={{ textDecoration: "none", color: "black" }} key={_id}>
        <div className="content_suggested_item" key={_id} id={_id}>
            <img src={image} alt="product_thumbnail" />
            <h4 id="content_suggested_name">{title}</h4>
            <span>₹{price}</span>
        </div>
    </Link>
}
