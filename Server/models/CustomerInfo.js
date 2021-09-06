const mongoose = require('mongoose')


const CustomerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Name is required']
    },
    contact: {
        type: Number,
        required: [true, 'Phone number is required']
    },
    email: {
        type: String,
        required: [true, 'e-mail is required']
    },
    address1: {
        type: String,
        required: [true, 'e-mail is required']
    },
    address2: {
        type: String,
        required: [true, 'e-mail is required']
    },
    dateCreated: {
        type: Date,
        default: new Date()
    },
    itemIDs: {
        type: Array
    }


})

module.exports = mongoose.model('CustomerInfo', CustomerSchema)