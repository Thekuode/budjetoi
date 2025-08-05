var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.send('Hello World!')
})

router.post('/',function(req, res, next) {
  res.send('got a POST request')
})

module.exports = router;
