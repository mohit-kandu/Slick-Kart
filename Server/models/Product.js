const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Name is required.'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Price is required.'],

    }
    ,
    description: {
        type: String,
        required: false

    },
    category: {
        type: String,
        required: false

    },
    image: {
        type: String,
        required: [true, 'Image is required.'],

    },
    amount: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('Product', ProductSchema)