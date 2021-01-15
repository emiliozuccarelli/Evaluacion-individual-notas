let db = require('../database/models');

module.exports = {
    index: function(req, res) {
        // db.sequelize.query("SELECT * FROM movies")
        db.notas.findAll()
        .then(function(notas) {
           
                return res.render('index', {
                notas: notas
            })
        })
     
    },
    create: function(req, res) {
        res.render('index')
    },
    save: function(req, res) {
        // res.send(req.body)
        db.notas.create({
        
            titulo: req.body.titulo,
            mensaje: req.body.mensaje
        })
        .then(function() {
            res.redirect("/")
        })  

    },
      destroy: function(req, res) {
        console.log(req)
        db.notas.destroy({
            
            where: {
                id: req.body.id
            }
        })
        .then(function() {
            res.redirect("/")
        })
    }
    
}