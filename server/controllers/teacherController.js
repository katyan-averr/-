const {Teachers} = require('../models/models')
const ApiError = require('../error/ApiError')

class TeacherController{
    async getAll(req, res){
        const teacher = await Teachers.findAll()
        return res.json(teacher)
    }
}

module.exports = new TeacherController()