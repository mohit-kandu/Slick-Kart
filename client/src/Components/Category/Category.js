import React from 'react'
import category_data from "./category_data.json"
import "./Category.css"

export default function Category() {

    return (
        <div className="category_wrapper">
            <ul className="category">
                {category_data.map(item => {
                    return <li key={item.id}>
                        <img src={item.image} alt="cateory_thumbnail" />
                        <h3>{item.name}</h3>
                    </li>
                })}
            </ul>
        </div>
    )
}
