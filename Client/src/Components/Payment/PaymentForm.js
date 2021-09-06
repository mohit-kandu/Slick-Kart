import React, { useState, useEffect } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useGlobalContext } from '../../Context/Context'
import Loading from "../Loading/LoadingSmall"

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const [customerInfo, setCustomerInfo] = useState({})
    const { isLoading, setIsLoading } = useGlobalContext()
    const { url } = useGlobalContext()
    const elements = useElements()
    const stripe = useStripe()
    let history = useHistory()

    // get the details of the latest customer while they fill their payment details
    useEffect(() => {
        const fetchCustomerInfo = async () => {
            await axios.get(`${url}/order/last_order`).then(customer => setCustomerInfo(customer.data))
        }
        fetchCustomerInfo()
    }, [url])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        if (!error) {
            try {
                setIsLoading(true)
                const { id } = paymentMethod
                const response = await axios.post(`/api/v1/payment`, {
                    // amount: Number(cartTotal),
                    amount: 10000,
                    id
                })
                if (response.data.success) {
                    setIsLoading(false)
                    console.log("Successful payment")
                    console.log(isLoading)
                    setSuccess(true)
                }

            } catch (error) {
                setIsLoading(false)
                console.log("Error", error)
            }
        } else {
            setIsLoading(false)
            console.log(error.message)
        }
    }

    const handleClick = () => {
        history.push('/')
    }
    return (
        <>
            {!success && !isLoading ?
                <>
                    <h2>Enter your payment details to complete the order:</h2>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="FormGroup">
                            <div className="FormRow">
                                <CardElement options={CARD_OPTIONS} />
                            </div>
                        </fieldset>
                        <button className="pay_btn">Confirm Payment</button>
                    </form>
                </>
                :
                isLoading ?
                    <>
                        <h2>Transaction in progress </h2>
                        <Loading />
                    </>
                    :

                    <div>
                        <h2>Your order is on your way. Your order ID is {customerInfo[0]._id}.</h2>
                        <button onClick={() => handleClick()} className="login">Shop More</button>
                    </div>

            }

        </>
    )
}