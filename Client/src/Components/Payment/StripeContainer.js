import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = 'pk_test_51JScKRSJbJIryP7wn8eA4iIKMGqRp64xZYKMtRIPup0rVBQSvJcTfo8g0nO8H6tm0InAHW7SQ0rpOexq9D12408300aIkr5R4W'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}