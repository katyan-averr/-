const Router = require('express')
const router = new Router()
const gradeController = require('../controllers/gradeController')

router.get('/', gradeController.getAll)

module.exports = router