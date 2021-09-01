const express = require('express')
const app = express()
const cors = require('cors')
const product = require('./routes/Product')
const footwearProduct = require('./routes/Footwear')
const Order = require('./routes/Order')
const Payment = require('./routes/Payment')
require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not_found')
const error_handler = require('./middleware/error_handler')
const PORT = process.env.PORT || 5000
const connectDB = require('./db/connect')
const bodyParser = require('body-parser')

const url = '/api/v1'

//middleware
app.use(express.json())
app.use(bodyParser.urlencoded(
    { extended: true }
))
app.use(cors())
app.use(`${url}/products`, product)
app.use(`${url}/footwears`, footwearProduct)
app.use(`${url}/payment`, Payment)
app.use(`${url}/order`, Order)
app.use(notFound)
app.use(error_handler)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.clear()
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
    }
}

start()
