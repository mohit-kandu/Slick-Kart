import React from 'react'
import "./Cart.css"
import { useGlobalContext } from '../../context/context'
import { Link } from 'react-router-dom'

export default function Cart() {
    const { isCartEmpty } = useGlobalContext()

    if (isCartEmpty)
        return (
            <div className="cart_container">
                {/* if cart empty */}
                <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
                <h2>Your cart is empty!</h2>
                <p>Add items to it now.</p>

                <a className="btn_shop_now" href="#"><Link to="/" style={{ textDecoration: 'none', color: "white" }}>Shop now</Link></a>

            </div >
        )
    return (
        <div>Hi</div>
    )
}
