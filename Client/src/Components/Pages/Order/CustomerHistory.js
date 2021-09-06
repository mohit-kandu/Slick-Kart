import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useGlobalContext } from '../../../Context/Context'
import { useParams } from "react-router-dom"
import Loading from '../../Loading/Loading'
import OrderedProduct from './OrderedProduct'
import "./Customer_history.css"


export default function CustomerHistory() {
    const [userData, setUserData] = useState([])
    const [userProducts, setUserProducts] = useState([])
    const { url, isLoading, setIsLoading } = useGlobalContext()
    const { customerID } = useParams()
    let IDArray

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setIsLoading(true)
                await axios.get(`${url}/order/customer/${customerID}`).then(resp => setUserData(resp.data))
            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        fetchUser()
        setIsLoading(false)
    }, [url])


    const fetchUserProducts = async (id) => {
        setIsLoading(true)
        await axios.get(`${url}/products/${id}`)
            .then(resp => setUserProducts(resp.data.data))
        setIsLoading(false)
    }


    if (isLoading) return <Loading />
    return (
        <div className="customer_history_container">
            <div className="">
                {userData.map(item => {
                    let IDs = JSON.stringify(item.itemIDs).split(/[,"]/)
                    IDs.shift()
                    IDs.pop()
                    return <div key={item.firstName}>
                        <h1>Ordered by:{item.firstName} {item.lastName} </h1>
                        <h2>Order was delivered to:{item.address1} {item.address2}</h2>
                        <h2>Ordered on:{item.dateCreated}</h2>
                        <div>Ordered Items:</div>
                        <OrderedProduct IDs={IDs} />

                        {/* {item.itemIDs.map(IDString => {
                            const purchasedItemIDs = IDString.split(',')
                            return <OrderedProduct key={IDString} />
                        })} */}
                    </div>
                })}
            </div>
        </div>
    )
}


// <div key={IDString}>
//                                 {purchasedItemIDs.map(async (temp) => {
//                                     let resp = await fetchUserProducts(temp)
//                                     return <div key={temp}>
//                                         <OrderedProduct product={resp} />
//                                     </div>
//                                 })}
//                             </div>