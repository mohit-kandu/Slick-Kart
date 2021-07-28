import React from 'react'
import "./Content.css"
import { useGlobalContext } from "../../../context/context"
import Loading from "../../Loading/Loading"
import { Link } from "react-router-dom"


export default function Content({ title }) {
    const { isLoading, products, handleChange } = useGlobalContext()


    if (isLoading)
        return <Loading />

    else {
        return <div className="content_suggested_container">
            <div className="content_suggested_subcontainer">
                <div className="content_suggested_title">
                    <h2>{title}</h2>
                    <Link to="/viewall" style={{ textDecoration: "none" }}><div>VIEW ALL</div></Link>
                </div>
                <div className="content_suggested_items">
                    {products.map(product => <div className="content_suggested_item" key={product.id}>
                        <img src={product.image} alt="product_thumbnail" />
                        <h4 id="content_suggested_name">{product.title}</h4>
                        <span>${product.price}</span>
                        {/* <p class="suggested_description">{product.description}</p> */}
                    </div>)}
                </div>
                <div className="next" onClick={e => handleChange(e, document.querySelector('.content_suggested_items'))}>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/02-arrow-direction/angle-right.svg" alt="nav_btn" />
                </div>
                <div className="prev" onClick={e => handleChange(e, document.querySelector('.content_suggested_items'))}>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/02-arrow-direction/angle-right.svg" alt="nav_btn" />
                </div>
            </div>
        </div>
    }
}




