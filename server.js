//
// FCC Request Header Parser Microservice
// Copyright (C) 2016 Nirix
//

var express = require('express');
var router = express();

router.get('/', function(req, res){
  res.json({
    "ipaddress": req.get('x-forwarded-for'),
    "language": req.get('accept-language').split(',')[0],
    "software": req.get('user-agent').split('(')[1].split(')')[0]
  });
});

router.listen(process.env.PORT || 3000, function(){
  console.log('Server listening on port', process.env.PORT);
});