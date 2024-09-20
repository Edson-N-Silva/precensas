const express = require('express');
const router = express.Router();
const presencasController = require('../controllers/presencaController');

router.get('/', presencasController.getAllPresenca);
router.post('/', presencasController.createPresenca);
router.put('/:id', presencasController.updatePresenca);
router.delete('/:id', presencasController.deletePresenca);

module.exports = router;
