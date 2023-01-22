const {Students} = require('../models/models')
const ApiError = require('../error/ApiError')

class StudentController{
    async create(req, res){

    }

    async getAll(req, res){
        const {groupId} = req.query
        let students;
        if (groupId){
            students = await Students.findAll({where:{groupId}})
        }
        if (!groupId){
            students = []
        }
        return res.json(students)
    }
}

module.exports = new StudentController()