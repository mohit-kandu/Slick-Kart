const router = require('express').Router()

const { getAllFootwears, createFootwear, getFootwear, deleteFootwear, updateFootwear, deleteAllFootwears } = require('../controllers/Footwear')

router.route('/').get(getAllFootwears).post(createFootwear).delete(deleteAllFootwears)
router.route('/:id').get(getFootwear).patch(updateFootwear).delete(deleteFootwear)


module.exports = router