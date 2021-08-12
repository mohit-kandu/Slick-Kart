const express = require('express')
const app = express()
const product = require('./routes/Product')
require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not_found')
const error_handler = require('./middleware/error_handler')
const PORT = process.env.PORT || 5000
const connectDB = require('./db/connect')


//middleware
app.use(express.json())
app.use('/api/v1/products', product)
app.use(notFound)
app.use(error_handler)

//middleware
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {

    }
}

start()
