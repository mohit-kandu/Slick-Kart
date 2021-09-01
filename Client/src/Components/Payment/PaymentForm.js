import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import { useHistory } from "react-router-dom"

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
    const elements = useElements()
    const stripe = useStripe()
    let history = useHistory()
    // const cartTotal = localStorage.getItem('cartTotal')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                localStorage.setItem("ching", "chong")
                console.log(localStorage)
                const { id } = paymentMethod
                const response = await axios.post(`/api/v1/payment`, {
                    // amount: Number(cartTotal),
                    amount: 10000,
                    id
                })
                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    const handleClick = () => {
        history.push('/')
    }

    return (
        <>
            {!success ?
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
                <div>
                    <h2>Your order is on your way. Your order ID is ching.</h2>
                    <button onClick={() => handleClick()} className="login">Shop More</button>

                </div>
            }

        </>
    )
}