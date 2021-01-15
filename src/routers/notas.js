const express = require('express');
const notasController = require('../controllers/notasController');
const router = express.Router();





router.get('/:id', notasController.editar)
router.post('/:id', notasController.update);





module.exports = router;