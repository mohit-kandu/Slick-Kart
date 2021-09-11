import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useGlobalContext } from '../../../Context/Context'
import { useParams } from "react-router-dom"
import Loading from '../../Loading/Loading'
import OrderedProduct from './OrderedProduct'
import "./Customer_history.css"


export default function CustomerHistory() {
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(true)
    const { url } = useGlobalContext()
    const { customerID } = useParams()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                await axios.get(`${url}/order/customer/${customerID}`).then(resp => setUserData(resp.data))
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [url])

    if (loading) return <Loading />
    const { firstName, lastName, email, address1, address2, contact } = userData.customerDetails
    return (
        <div className="customer_history_container">
            <h1 className="customer_history_title">This order was placed by:</h1>
            <div className="customer_history">
                <span>{firstName} </span>
                <span>{lastName}</span>
            </div>
            <div className="customer_history">
                <span>{contact} </span>
                <span>{email}</span>
            </div>
            <div className="customer_history">
                <span>{address1} {address2}</span>

            </div>
            <div className="ordered_products_container">
                <h1 className="ordered_products_title">You ordered the following products:</h1>
                {
                    userData.customerProducts.map(product => {
                        const { title, image, price, category, _id } = product
                        return <OrderedProduct key={_id} title={title} image={image} price={price} category={category} />
                    })
                }
            </div>
        </div>
    )
}