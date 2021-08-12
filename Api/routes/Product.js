const router = require('express').Router()

const { getAllProducts, createProduct, getProduct, deleteProduct, updateProduct } = require('../controllers/Product')

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)


module.exports = router