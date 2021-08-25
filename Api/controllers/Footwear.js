const Footwear = require('../models/Footwear')
const asyncWrapper = require('../middleware/async')


const footWears = require("../tempData/footWears.json")


const getAllFootwears = asyncWrapper(async (req, res) => {

    const product = await Footwear.find().limit(20)
    return res.status(201).json({ success: true, noOfItems: product.length, data: product })
}
)

const createFootwear = asyncWrapper(async (req, res) => {
    let product = []

    // const footWearData = footWears
    // let productData = []
    // footWearData.map(item => {
    //     const tempData = {}
    //     tempData.title = item.name
    //     tempData.price = Number(item.price.current.value)
    //     tempData.image = item.imageUrl
    //     tempData.amount = 1
    //     productData = [...productData, tempData]

    // })

    // To insert one json data into the database
    // product = await Product.create(item)

    // To insert multiple json data into the database
    // for await (item of productData) {
    //     const newItem = await Footwear.create(item)
    //     product = [...product, newItem]
    // }

    return res.status(201).json({ product })
}
)

const getFootwear = asyncWrapper(async (req, res) => {
    const product = await Footwear.findOne({ _id: req.params.id })
    product ? res.status(200).json({ product }) : res.status(404).json({ success: 'true', message: 'No document with that ID exists' })
}
)

const deleteFootwear = asyncWrapper(async (req, res) => {

    const product = await Footwear.findOneAndDelete({ _id: req.params.id })
    product ? res.status(200).json({ product }) : res.status(404).json({ success: 'true', message: 'No document with that ID exists' })

    return res.status(500).json({ success: 'false', message: error })

})

const deleteAllFootwears = asyncWrapper(async (req, res) => {

    const product = await Footwear.remove()
    res.status(200).json({ success: 'true', data: product })

    return res.status(500).json({ success: 'false', message: error })

}
)
const updateFootwear = asyncWrapper(async (req, res) => {
    const { id: productID } = req.params
    // const task = await Task.findByIdAndUpdate({_id:productID}, req.body) // this returns old object and doesn't check for validation
    const product = await Footwear.findByIdAndUpdate({ _id: productID }, req.body, { new: true, runValidators: true })
    product ? res.status(200).json({ product }) : res.status(404).json({ success: 'true', message: 'No document with that ID exists' })
    res.status(500).json({ success: false, data: error })
}
)


module.exports = { getAllFootwears, createFootwear, getFootwear, deleteFootwear, updateFootwear, deleteAllFootwears }