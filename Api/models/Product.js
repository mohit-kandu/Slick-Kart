const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'], //we can pass custom message for validators using an array and passing the message as second parameter.
        trim: true,
        maxlength: [20, 'Name length cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Product', ProductSchema)