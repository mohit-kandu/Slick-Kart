import React from 'react'
import "./Cart.css"
import CartItem from './CartItem'
import { useGlobalContext } from '../../Context/Context'
import { Link } from 'react-router-dom'
import './Cart.css'

const CartContainer = () => {
    const { cart, total, amount, modalIsOpen, setModalIsOpen } = useGlobalContext()

    const handleClick = () => {
        setModalIsOpen(true)
        console.log(modalIsOpen)
    }

    if (cart.length === 0) /* if cart empty */
        return (
            <div className="cart_container">
                <div className="img_container">
                    <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?" alt="" />

                </div>
                <h2 style={{ textAlign: "center" }}>Your cart is empty!</h2>
                <p>Add items to it now.</p>
                <Link to="/" style={{ textDecoration: 'none', color: "white" }}>
                    <div className="btn_shop_now">
                        <p className="">Shop now</p>
                    </div>
                </Link>
            </div >
        )
    else
        return (
            <div className="cart_wrapper">
                <section className='cart_container'>
                    <header>
                        <h2>My Cart ({amount})</h2>
                    </header>
                    <div>
                        {cart.map((item) => {
                            return <CartItem {...item} key={item._id} />
                        })}
                    </div>
                    <footer>
                        <div className='place_order'>
                            <button className='place_order_btn' onClick={() => handleClick()} >
                                Place Order
                            </button>
                        </div>
                    </footer>
                </section>
                <section className="price_details">
                    <header>
                        <h1>Price details</h1>
                    </header>
                    <div className="delivery_charges"><span>Price ({amount} items)</span>
                        <span className="move_right">₹{total}</span></div>
                    <div className="delivery_charges"><span>Discount</span>
                        <span className="move_right free">-₹{Math.floor(total - .3 * total)}</span></div>
                    <div className="delivery_charges"><span>Delivery Charges</span>
                        <span className="move_right free">FREE</span></div>
                    <h2>Total Amount</h2>
                    <div className="save_text">You will save 30% on this order</div>
                    <p>Save extra using SuperCoins</p>

                </section>
            </div>
        )
}


export default CartContainer

