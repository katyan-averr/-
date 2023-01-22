const Router = require('express')
const router = new Router()
const arrearController = require('../controllers/arrearController')

router.post('/', arrearController.create)
router.get('/', arrearController.getAll)

module.exports = router