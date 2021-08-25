import React, { useState, useEffect } from 'react'
import "./Suggested.css"
import { useGlobalContext } from "../../../Context/Context"
import Loading from "../../Loading/Loading"
import { Link } from "react-router-dom"
import axios from "axios"



export default function Suggested() {
    const { isLoading, handleChange, setIsLoading, productsClothing } = useGlobalContext()

    // const fetchproducts = async () => {
    //     setIsLoading(true)
    //     await axios.get("/api/v1/products").then(res => setProducts(res.data.data))
    //     setIsLoading(false)
    // } 

    // useEffect(() => {
    //     fetchproducts()
    // }, [])

    if (isLoading)
        return <Loading />
    else
        return <div className="suggested_container">
            <div className="suggested_subcontainer">
                <div className="suggested_title">
                    <h2>Monsoon Must-haves</h2>
                    <Link to="/viewall" style={{ textDecoration: "none" }}><div><span>VIEW ALL</span></div></Link>
                </div>
                <div className="suggested_items">
                    {productsClothing.map(product =>
                        <Link to={{ pathname: `/singleItem/${product._id}` }} style={{ textDecoration: "none", color: "black" }} key={product._id}>
                            <div className="suggested_item" >
                                <img src={product.image} alt="product_thumbnail" />
                                <h4 id="suggested_name">{product.title}</h4>
                                <span>${product.price}</span>
                            </div>
                        </Link>
                    )
                    }
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


