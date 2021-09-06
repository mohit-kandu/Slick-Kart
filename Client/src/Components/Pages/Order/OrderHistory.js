import React, { useState, useEffect } from 'react'
import "./OrderHistory.css"
import axios from "axios"
import { useGlobalContext } from '../../../Context/Context'
import { Link } from "react-router-dom"
import Loading from '../../Loading/Loading'

export default function OrderHistory() {
    const [orderHistory, setOrderHistory] = useState([])
    const { url, isLoading, setIsLoading } = useGlobalContext()
    const [listEmpty, setListEmpty] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                await axios.get(`${url}/order/history`).then(resp => setOrderHistory(resp.data))
                setIsLoading(false)
                // orderHistory.length === 0 ? setListEmpty(true) : setListEmpty(false)

            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])


    if (isLoading) return <Loading />

    if (listEmpty) return <div className="order_history_container"><h2>No customers yet. Order now to become the very first!</h2></div>
    return (
        <div className="order_history_container">
            <div className="order_history_title">
                <h3>Order ID:</h3>
                <h3> Order Date:</h3>
            </div>
            <div className="order_history">
                {orderHistory.map(item => {
                    return <div className="order_history_item" key={item._id}>
                        <Link style={{ textDecoration: "none", color: 'black' }} to={{ pathname: `/customer_history/${item._id}` }}> <div>{item._id}</div></Link>
                        <div>{item.dateCreated}</div>
                    </div>
                })}
            </div>

        </div>
    )
}
