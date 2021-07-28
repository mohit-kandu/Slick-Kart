import React from 'react'
import Content from "../Content"
// import data from "./Content1.json"

export default function Content1({ title }) {
    // const left_arrow = document.querySelector(".prev")
    return (
        <>
            {/* {data.forEach(element => {
                console.log(element.Recipe)
            })} */}
            <Content title={title} url="https://fakestoreapi.com/products" />
        </>
    )
}
