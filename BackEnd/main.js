var http = require('http');
var fs = require('fs');
var express = require('express');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var app = express();

var mongoCredentials = 'mongodb://localhost:27017/collabook';
var db = null;

mongo.connect(mongoCredentials, function(err, dbc){
	
	db = dbc;
	
});

app.use(bodyParser.urlencoded({ extended: true }));

//epikoinwnia me to '/api/register'

app.post('/api/register', function(req, res){
	
	var users = db.collection('users');
		
	users.insert({
		
		username: req.body.username,
		password: req.body.password,
		mail: req.body.email,
		name: req.body.name,
		surname: req.body.surname
		
	}, function(){ 
		
		users.find({ name:"kosmas" }).toArray(function(err, data){
			
			res.send(JSON.stringify(data));
			
		});
		
	});
	
});


//epikoinwnia me to '/api/login'

app.post('/api/login', function(req, res) {
	
	var users = db.collection('users');
	
	users.find({ username: "kosmas" }).toArray(function(err, data){
		
		if( data ){
			
			res.send(JSON.stringify(data));
			
		}
	
	});

});


app.get('*', express.static('./www/'));

var server = http.createServer(app);

server.listen(8080, '127.0.0.1');