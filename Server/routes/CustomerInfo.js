const router = require('express').Router()
const { getCustomer, createCustomer, deleteCustomer, getLatestCustomer, getAllCustomers, getAllCustomerIDs } = require('../controllers/CustomerInfo')

router.route('/').post(createCustomer).delete(deleteCustomer).get(getAllCustomers)
router.route('/customer/:custID').get(getCustomer)
router.route('/last_order').get(getLatestCustomer)
router.route('/history').get(getAllCustomerIDs)

module.exports = router
