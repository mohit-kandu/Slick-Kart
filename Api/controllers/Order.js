const asyncWrapper = require('../middleware/async')

const Order = asyncWrapper(async (req, res) => {
    console.clear()
    //validation for first and last name
    const nameValidator = /^[a-zA-Z]+$/
    // const contactValidator = /^[0-9]/
    // req.body.contact = Number(req.body.contact)

    // console.log(req.body)



    // return res.status(201).json({ success: true, data: req.body })
    return (res.status(201).json({ data: req.body }))
}
)
module.exports = Order