const express = require('express'),
    router = express.Router();

var db = require('../db/mysql');
var DiscoModel = require('../models/DiscoModel')(db);
var DiscoController = require('../controllers/DiscoController')(DiscoModel);


router.get('/', DiscoController.getAll.bind(DiscoController));
router.get('/:_id', DiscoController.getAllByCollection.bind(DiscoController));
router.post('/', DiscoController.create.bind(DiscoController));
router.delete('/:_id', DiscoController.remove.bind(DiscoController));
router.put('/:_id', DiscoController.update.bind(DiscoController));

module.exports = router;