const centers = require('./database/fakedata.js')
//responsaveis por contar as funcoes das rotas 

module.exports = {

    index(req, res){
        const city= req.query.city
        //uma funçao que pede onde  tá o arquivo
        return res.render('index', {city})
    },
    center(req, res){
        return res.render('center')
    },
    centers(req, res){
        return res.render('centers', {centers})
    },
    createCenter(req, res){
        return res.render('create-center')
    }
} 