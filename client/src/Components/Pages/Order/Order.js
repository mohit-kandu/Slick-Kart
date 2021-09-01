import React from 'react'
import { useGlobalContext } from '../../../Context/Context'
import axios from "axios"
import LoadingSmall from '../../Loading/LoadingSmall'
import Payment from "../../Payment/Payment"

export default function Order() {
    const { url, isLoading, setIsLoading } = useGlobalContext()
    const [formData, setFormData] = React.useState({})


    // if (isLoading)
    //     return <LoadingSmall />
    return (
        <div>
            <Payment />
        </div>
    )
}

