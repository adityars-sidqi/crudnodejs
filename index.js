var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Halo semuanya!');
});

app.get('/users/:name', function(req, res) {
  res.send("Namanya adalah : " + req.params.name);
});

app.listen(3000);
