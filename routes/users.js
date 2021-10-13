var express = require('express');
var router = express.Router();

/* Obtenir list de customisation des services. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
