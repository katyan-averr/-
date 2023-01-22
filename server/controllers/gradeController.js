const {Grades} = require('../models/models')
const ApiError = require('../error/ApiError')

class GradeController{
    async getAll(req, res){
        const grade = await Grades.findAll()
        return res.json(grade)
    }
}

module.exports = new GradeController()