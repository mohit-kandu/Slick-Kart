const Product = require('../models/Product')
const asyncWrapper = require('../middleware/async')


const footWears = require("../tempData/footWears.json")


const getAllProducts = asyncWrapper(async (req, res) => {
    // send result matching a query
    const { title, sort } = req.query
    const queryObject = {}

    if (title) {
        queryObject.title = { $regex: title, $options: 'i' }
    }
    let result = await Product.find(queryObject)

    if (sort) {
        console.log(result)
        result = result.sort({ price: 1 })
    }

    const product = await result

    return res.status(201).json({ success: true, NoOfItems: product.length, data: product })
}
)

const createProduct = asyncWrapper(async (req, res) => {
    let product = []

    //To insert one json data into the database
    product = await Product.create(item)

    //To insert multiple json data into the database
    // for await (item of productData) {
    //     const newItem = await Product.create(item)
    //     product = [...product, newItem]
    // }

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

})

const deleteAllProducts = asyncWrapper(async (req, res) => {
    // res.send("deleteTask")

    const product = await Product.remove()
    res.status(200).json({ success: 'true', data: product })

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


module.exports = { getAllProducts, createProduct, getProduct, deleteProduct, updateProduct, deleteAllProducts }








 // const footWearData = footWears
    // let FootWeatDataFinal = []
    // footWearData.map(item => {
    //     const tempData = {}
    //     tempData.name = item.name
    //     tempData.price = item.price.current.value
    //     tempData.image = item.imageUrl
    //     tempData.amount = 1
    //     FootWeatDataFinal = [...FootWeatDataFinal, tempData]

    // })
    // console.log(FootWeatDataFinal)
    // if (!title && !sort)
    //     product = await Product.find()

