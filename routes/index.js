var express = require('express'),
    router = express.Router();

router.get('/', function (request, response) {
  response.status(201);
  response.json({ 'name': 'Vinicius Folha', 'email': 'vinifolha@gmail.com' });
});

// routers
router.use('/api/discos', require('./discoRouter'));
router.use('/api/colecoes', require('./colecaoRouter'));

module.exports = router;