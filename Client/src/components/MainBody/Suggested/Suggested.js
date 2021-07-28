import React from 'react'
import "./Suggested.css"
import { useGlobalContext } from "../../../context/context"
import Loading from "../../Loading/Loading"
import { Link } from "react-router-dom"



export default function Suggested() {
    const { products, isLoading, handleChange } = useGlobalContext()

    if (isLoading)
        return <Loading />
    else
        return <div className="suggested_container">
            <div className="suggested_subcontainer">
                <div className="suggested_title">
                    <h2>Monsoon Must-haves</h2>
                    <Link to="/viewall" style={{ textDecoration: "none" }}><div>VIEW ALL</div></Link>
                </div>
                <div className="suggested_items">
                    {products.map(product => <div className="suggested_item" key={product.id}>
                        <img src={product.image} alt="product_thumbnail" />
                        <h4 id="suggested_name">{product.title}</h4>
                        <span>${product.price}</span>
                        {/* <p class="suggested_description">{product.description}</p> */}
                    </div>)}
                </div>
                <div className="next" onClick={e => handleChange(e, document.querySelector(".suggested_items"))}>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/02-arrow-direction/angle-right.svg" alt="nav_btn" />
                </div>
                <div className="prev" onClick={e => handleChange(e, document.querySelector('.suggested_items'))}>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/02-arrow-direction/angle-right.svg" alt="nav_btn" />
                </div>
            </div>
            <div className="top_deal">
                <img src="https://rukminim1.flixcart.com/flap/464/708/image/877f4da857cd82b8.jpg?q=70" alt="" />
            </div>
        </div>
}


