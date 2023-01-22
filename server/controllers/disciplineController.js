const {Disciplines} = require('../models/models')
const ApiError = require('../error/ApiError')

class DisciplineController{
    async getAll(req, res){
        const discipline = await Disciplines.findAll()
        return res.json(discipline)
    }
}

module.exports = new DisciplineController()