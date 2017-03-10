var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/method-get',function(req,res){
  res.send('This is method get');
});

module.exports = router;
