const {Groups} = require('../models/models')
const ApiError = require('../error/ApiError')

class GroupController{
    async getAll(req, res){
        const group = await Groups.findAll()
        return res.json(group)
    }
}

module.exports = new GroupController()