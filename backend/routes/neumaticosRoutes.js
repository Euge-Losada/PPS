const express = require('express');
const router = express.Router();
const NeumaticosController = require('../controllers/neumaticosController');

router.get('/', NeumaticosController.getAll);
router.post('/', NeumaticosController.create);

router.put('/:id', NeumaticosController.update);
router.delete('/:id', NeumaticosController.delete);


module.exports = router;
