let db = require('../database/models');

module.exports = {
   
    
    editar: function(req, res) {
        db.notas.findByPk(req.params.id)
        .then(function(notas) {
            res.render("detail", {
                notas: notas
            })
        })
    },
    update: function(req, res) {
        db.notas.update({
            titulo: req.body.titulo,
            mensaje: req.body.mensaje
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.redirect('/')
        })

    },
  
}