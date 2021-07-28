/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Testing.css"
import { useGlobalContext } from '../context/context'
// import axios from "axios"

export default function Cart() {
    const { isCartEmpty } = useGlobalContext()
    // const api_data = axios.get('/api/v1sdsd').then(res => console.log({ res })).catch(ere => console.log(ere))

    if (isCartEmpty)
        return (
            <h1>hello</h1>
            // <div className="cart_container">
            //     {/* if cart empty */}
            //     <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
            //     <h2>Your cart is empty!</h2>
            //     <p>Add items to it now.</p>
            //     <a className="btn_shop_now" href="#">Shop now</a>
            // </div>
        )
    return (
        <div>Hi</div>
    )
}
