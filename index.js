var express = require('express');

var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.render('landing-page');
});

app.get('/welcome', function (req, res) {
	console.log('this is the request', req.query.visitor)
	res.render('index');
});

app.get('/tour', function (req, res) {
	console.log('this is the request', req.query)
	res.render('index');
});

app.get('/home', function (req, res) {
  res.render('index');
});

app.get('/test', function (req, res) {
  res.render('test');
});

app.listen(1337, function () {
  console.log('Example app listening on port 1337	!');
});