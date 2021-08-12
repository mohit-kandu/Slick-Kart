const Product = require('../models/Product')
const asyncWrapper = require('../middleware/async')
const productData = require('../Product.json')

const getAllProducts = asyncWrapper(async (req, res) => {
    // const product = await Product.find({})
    res.header("Access-Control-Allow-Origin", "*");
    const product = productData
    // return res.status(201).json({ success: true, data: product })
    return res.status(201).json({
        data: product,
    })
}
)

const createProduct = asyncWrapper(async (req, res) => {
    const product = await Product.create(req.body)
    return res.status(201).json({ product })
}
)

const getProduct = asyncWrapper(async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id })
    product ? res.status(200).json({ product }) : res.status(404).json({ success: 'true', message: 'No document with that ID exists' })
}
)

const deleteProduct = asyncWrapper(async (req, res) => {
    // res.send("deleteTask")

    const product = await Product.findOneAndDelete({ _id: req.params.id })
    product ? res.status(200).json({ product }) : res.status(404).json({ success: 'true', message: 'No document with that ID exists' })

    return res.status(500).json({ success: 'false', message: error })

}
)
const updateProduct = asyncWrapper(async (req, res) => {
    const { id: productID } = req.params
    // const task = await Task.findByIdAndUpdate({_id:productID}, req.body) // this returns old object and doesn't check for validation
    const product = await Product.findByIdAndUpdate({ _id: productID }, req.body, { new: true, runValidators: true })
    product ? res.status(200).json({ product }) : res.status(404).json({ success: 'true', message: 'No document with that ID exists' })
    res.status(500).json({ success: false, data: error })
}
)


module.exports = { getAllProducts, createProduct, getProduct, deleteProduct, updateProduct }