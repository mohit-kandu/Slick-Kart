const router = require('express').Router()
const Order = require('../controllers/Order')

router.route('/').post(Order)

module.exports = router
