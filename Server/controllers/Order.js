const asyncWrapper = require('../middleware/async')
const CustomerInfo = require('../models/CustomerInfo')

const Order = asyncWrapper(async (req, res) => {
    //validation for first and last name
    // const nameValidator = /^[a-zA-Z]+$/
    // const contactValidator = /^[0-9]/
    // req.body.contact = Number(req.body.contact)

    await CustomerInfo.create(req.body)
    return res.redirect('/order')
}
)

// const Order = asyncWrapper(async (req, res) => {


// })
module.exports = Order