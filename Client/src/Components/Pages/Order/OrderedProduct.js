import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../../../Context/Context'
import axios from "axios"
import Loading from '../../Loading/Loading'

export default function OrderedProduct({ IDs }) {
    const { url, isLoading, setIsLoading } = useGlobalContext()
    // const [product, setProduct] = useState({})

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             setIsLoading(true)
    //             // await axios.get(`${url}/products/${id}`).then(resp => setProduct(resp.data.data))
    //             await axios.get(`${url}/products/${id}`).then(resp => console.log(resp.data.data))
    //             setIsLoading(false)
    //         } catch (error) {
    //             console.log(error)
    //             setIsLoading(false)
    //         }
    //     }
    //     fetchUser()
    //     setIsLoading(false)
    // }, [url, id])

    // if (isLoading) return <Loading />
    IDs.map(item => console.log('===>', item, '<====z'))
    return (
        <div>
            OrderedProduct
        </div>
    )
}
