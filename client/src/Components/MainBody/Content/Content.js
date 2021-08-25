import React from 'react'
import "./Content.css"
import { useGlobalContext } from "../../../Context/Context"
import Loading from "../../Loading/Loading"
import { Link } from "react-router-dom"
import Item from "../../Item/Item"




export default function Content({ title, products, contentID }) {
    const { isLoading, handleChange } = useGlobalContext()

    if (isLoading)
        return <Loading />

    else {
        return <div className="content_suggested_container">
            <div className="content_suggested_subcontainer">
                <div className="content_suggested_title">
                    <h2>{title}</h2>
                    <Link to="/viewall" style={{ textDecoration: "none" }}><div>VIEW ALL</div></Link>
                </div>
                <div id={contentID} className="content_suggested_items">
                    {products.map(product => {
                        return <Item product={product} key={product._id} />
                    })
                    }
                </div>
                <div className="next" onClick={e => handleChange(e, document.querySelector(`#${contentID}`))}>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/02-arrow-direction/angle-right.svg" alt="nav_btn" />
                </div>
                <div className="prev" onClick={e => handleChange(e, document.querySelector(`#${contentID}`))}>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/02-arrow-direction/angle-right.svg" alt="nav_btn" />
                </div>
            </div>
        </div>
    }
}




