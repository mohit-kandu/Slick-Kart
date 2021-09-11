import React, { useEffect } from 'react'
import { useGlobalContext } from '../../Context/Context'
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading"
import AddingToCart from "../Loading/AddingToCart"
import axios from "axios"
import './SingleItem.css'

export default function SingleItem() {
    const { url, isLoading, setIsLoading, addItem, setAddingToCart, setTime } = useGlobalContext()
    const [singleProduct, setSingleProduct] = React.useState([])
    const { itemID } = useParams()
    window.scrollTo(0, 0);

    const addingToCartAnimation = async (itemID) => {
        setAddingToCart(true)
        setTime(true)
        await addItem(itemID)
        setAddingToCart(false)
    }

    const getSingleProduct = async (itemID) => {
        let temp
        setIsLoading(true)
        await axios.get(`${url}/products/${itemID}`).then(resp => temp = resp.data.product).catch(err => console.log("Can't fetch single item", err))

        if (!temp) {
            await axios.get(`${url}/footwears/${itemID}`).then(resp => temp = resp.data.product).catch(err => console.log("Can't fetch single item", err))
        }

        setSingleProduct(temp)
        setIsLoading(false)


    }
    useEffect(() => {
        getSingleProduct(itemID)
    }, [])


    const { title, image, price } = singleProduct
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="single_product_container" key={itemID}>
            <div className="left_side">
                <div>
                    <img src={image} alt="product_image" />
                </div>
                <div className="left_side_buttons">
                    <a id="add_to_cart" onClick={() => addingToCartAnimation(itemID)}><svg className="V3C5bO" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>ADD TO CART</a>
                    <a href="#"><span></span>BUY NOW</a>
                </div>
                <div className="adding_to_cart">
                    <AddingToCart />
                </div>

            </div>

            <div className="right_side">
                <h1>{title}</h1>
                <div className="rating">
                    <span>4.3<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12"><path fill="#FFF" d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z" /></svg></span><span>13,009 Ratings &amp; 1387 Reviews</span>
                </div>
                <span style={{ color: "#388E3C" }}>Special Price</span>
                <div className="cost">
                    <span>₹{price || 0}</span>
                    <span>₹{Math.floor((Number(price) + 30 / 100 * Number(price)))}</span>
                    <span>30% Off</span>
                    <span> <img style={{ width: "20px", border: "none" }} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/info-basic_6c1a38.svg" alt="" /> </span>
                </div>
                <div className="available_offers">
                    <h1>Available Offers</h1>
                    <ul>
                        <li><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png"></img> <span className="special_price" >Special Price</span> Get extra 15% off (price inclusive of discount) <a href="" > T&amp;C</a></li>
                        <li><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png"></img> <span className="special_price" >Combo Offer</span> Buy 3 items save 5%;Buy 4 save 7%;Buy 5+ save 10%See all products <a href="" > T&amp;C</a></li>
                        <li><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png"></img> <span className="special_price" >Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card <a href="" > T&amp;C</a></li>
                        <li><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png"></img> <span className="special_price" >Bank Offer </span> 20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik <a href="" > T&amp;C</a></li>
                        <li><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png"></img> <span className="special_price" >Bank Offer </span> 10% Off on First time ICICI Mastercard Credit Card transaction, Terms and Condition apply <a href="" > T&amp;C</a></li>
                        <li><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png"></img> <span className="special_price" >Bank Offer</span> Flat ₹100 off on first Flipkart Pay Later order of ₹500 and above <a href="" > T&amp;C</a></li>
                    </ul>
                </div>

                <div className="delivery">
                    <div>Delivery</div>
                    <div className="delivery_options">
                        <svg width="13" height="12">
                            <path fill="#2874f0" className="_6xm1dD" d="M4.2 5.7c-.828 0-1.5-.672-1.5-1.5 0-.398.158-.78.44-1.06.28-.282.662-.44 1.06-.44.828 0 1.5.672 1.5 1.5 0 .398-.158.78-.44 1.06-.28.282-.662.44-1.06.44zm0-5.7C1.88 0 0 1.88 0 4.2 0 7.35 4.2 12 4.2 12s4.2-4.65 4.2-7.8C8.4 1.88 6.52 0 4.2 0z" fillRule="evenodd"></path>
                        </svg>
                        <input type="text" className="text" />
                        <span>Change</span>
                    </div>
                </div>
                {/* delivery */}
                <div className="delivery_info">
                    <span>Delivery by 14th Aug, Saturday</span>
                    <span>₹50</span>
                    <span className="question">?</span>
                </div>
                <div className="delivery_info" style={{ color: 'var(--color-primary)' }}> View Details</div>
                {/* highlights */}
                <div className="highlights_services">
                    <div className="highlights">
                        <div >Highlights</div>
                        <ul>
                            <li>Good stuff</li>
                            <li>Nice stuff</li>
                        </ul>
                    </div>
                    <div className="services highlights">
                        <div className="">Services</div>
                        <ul>
                            <li>No Returns Applicable</li>
                            <li>Cash on delivery available</li>
                        </ul>
                    </div>
                </div>
                {/* Seller */}
                <div className="seller">
                    <div className="services">Seller</div>
                    <div className="rating seller">
                        <span>SuperComNet</span><span>4.6<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12"><path fill="#FFF" d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z" /></svg></span>
                    </div>
                </div>
                <div className="super_coin">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOh0lljw9fpRenecclWtPPiTssx85bkf-ZIA&usqp=CAU" alt="" />
                </div>

            </div>
        </div>
    )
}
