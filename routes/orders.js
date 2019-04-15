var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This will list all orders');
});
router.get('/:id', function(req, res, next) {
  res.send('This will list details of order :'+req.params.id);
});

module.exports = router;
