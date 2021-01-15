const express = require('express');
const router = express.Router();


const indexController = require('../controllers/indexController');

router.get('/', indexController.index)
router.get('/', indexController.create);
router.post('/', indexController.save);

router.delete('/delete',indexController.destroy);



module.exports = router;