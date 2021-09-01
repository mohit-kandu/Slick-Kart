const asyncWrapper = require('../middleware/async')
const stripe = require("stripe")('sk_test_51JScKRSJbJIryP7wXwmVv6cHQJ1qAtfbyg11zre8n98Ta3LxZdbx8psk7MNnVYbIbyt1y7GYvbLewVSECZ2GPapw00tq2MWlBc')

const Payment = asyncWrapper(async (req, res) => {
    let { amount, id } = req.body
    // console.clear()
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "INR",
            description: "Flipkart Order",
            payment_method: id,
            confirm: true
        })
        console.log("Payment", { payment })

        res.json({
            message: "Payment successful",
            success: true
        })
    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }
})

module.exports = Payment