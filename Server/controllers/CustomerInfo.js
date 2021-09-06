const asyncWrapper = require('../middleware/async')
const CustomerInfo = require('../models/CustomerInfo')


//Add a new customer in the database
const createCustomer = asyncWrapper(async (req, res) => {
    //validation for first and last name
    // const nameValidator = /^[a-zA-Z]+$/
    // const contactValidator = /^[0-9]/
    // req.body.contact = Number(req.body.contact)

    await CustomerInfo.create(req.body)
    // console.log(req.body)
    return res.status(201).redirect('/order')

}
)
//!!CAUTION!!! DELETE ALL THE CUSTOMER DETAILS IN THE DATABASE
const deleteCustomer = asyncWrapper(async (req, res) => {
    await CustomerInfo.deleteMany()
    return res.status(201).send("Database cleared")

}
)
//get full details of the latest customer that has ordered
const getLatestCustomer = asyncWrapper(async (req, res) => {
    const result = await CustomerInfo.find().sort({ dateCreated: -1 }).limit(1)
    return res.status(201).json(result)

}
)
//get full details of all the customers present in the database
const getAllCustomers = asyncWrapper(async (req, res) => {
    const result = await CustomerInfo.find()
    return res.status(201).json(result)

}
)
//get full details of customer matching the customer ID
const getCustomer = asyncWrapper(async (req, res) => {
    const { custID } = req.params
    const result = await CustomerInfo.find({ _id: custID })
    return res.status(201).json(result)

}
)
//get all the IDs of the customers that have ordered
const getAllCustomerIDs = asyncWrapper(async (req, res) => {
    const result = await CustomerInfo.find().select('_id dateCreated').sort('dateCreated')
    if (result === []) return res.status(200).json({ result: "No customers yet" })
    return res.status(201).json(result)

}
)


module.exports = { getCustomer, createCustomer, deleteCustomer, getLatestCustomer, getAllCustomers, getAllCustomerIDs }