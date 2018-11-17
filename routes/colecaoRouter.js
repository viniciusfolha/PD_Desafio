const express = require('express'),
    router = express.Router();

var db = require('../db/mysql');
var ColecaoModel = require('../models/ColecaoModel')(db);
var ColecaoController = require('../controllers/ColecaoController')(ColecaoModel);


router.get('/', ColecaoController.getAll.bind(ColecaoController));
router.get('/:_id', ColecaoController.getById.bind(ColecaoController));
router.post('/', ColecaoController.create.bind(ColecaoController));
router.delete('/:_id', ColecaoController.remove.bind(ColecaoController));
router.put('/:_id', ColecaoController.update.bind(ColecaoController));

module.exports = router;