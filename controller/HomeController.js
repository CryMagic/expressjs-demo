var express = require('express');
var controller = express.Router();

/* GET home page. */
controller.get('/test', function(req, res, next) {
  res.send('test');
});


module.exports = controller;
