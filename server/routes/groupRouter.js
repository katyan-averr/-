const Router = require('express')
const router = new Router()
const groupController = require('../controllers/groupController')

router.get('/', groupController.getAll)

module.exports = router