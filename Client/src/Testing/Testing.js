import React from 'react'
import "./Testing.css"
import { useGlobalContext } from '../Context/Context'
import LoadingSmall from "../Components/Loading/LoadingSmall"
import axios from "axios"

export default function Cart() {
    const { isCartEmpty } = useGlobalContext()

    React.useEffect(() => {
        loadBackendData()
    }, [])
    const loadBackendData = async () => {

        await axios.get('/api/v1').then(res => console.log(res.data)).catch(ere => console.log(ere))
    }

    if (isCartEmpty)
        return (
            <LoadingSmall />

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
