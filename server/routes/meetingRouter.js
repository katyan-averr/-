const Router = require('express')
const router = new Router()
const meetingController = require('../controllers/meetingController')

router.post('/', meetingController.create)
router.get('/', meetingController.getAll)

module.exports = router