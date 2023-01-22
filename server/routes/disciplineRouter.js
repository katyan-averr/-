const Router = require('express')
const router = new Router()
const disciplineController = require('../controllers/disciplineController')

router.get('/', disciplineController.getAll)

module.exports = router