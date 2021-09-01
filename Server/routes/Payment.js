const router = require('express').Router()
const Payment = require('../controllers/Payment')

router.route('/').post(Payment)

module.exports = router
