const {Arrears} = require('../models/models')
const ApiError = require('../error/ApiError')

class ArrearController{
    async create(req, res){
        
    }

    async getAll(req, res){
        const arrear = await Arrears.findAll()
        return res.json(arrear)
    }
}

module.exports = new ArrearController()