import React from 'react'
import { useGlobalContext } from '../../../Context/Context'
import axios from "axios"
import LoadingSmall from '../../Loading/LoadingSmall'

export default function Order() {
    const { url, isLoading, setIsLoading } = useGlobalContext()
    const [formData, setFormData] = React.useState({})


    // if (isLoading)
    //     return <LoadingSmall />
    return (
        <div>Hello from frontend</div>
    )
}

