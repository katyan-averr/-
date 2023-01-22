const Router = require('express')
const router = new Router()
const studentController = require('../controllers/studentController')

router.post('/', studentController.create)
router.get('/', studentController.getAll)

module.exports = router