const Router = require('express')
const router = new Router()
const teacherController = require('../controllers/teacherController')

router.get('/', teacherController.getAll)

module.exports = router