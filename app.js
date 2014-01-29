/**
 * select [development || test || production] 
 */
var express = require('express')
, http = require('http')
, path = require('path')
, exphbs = require('express3-handlebars')
, routes = require('./routes/routes')
, fs = require('fs')
, AWS = require('aws-sdk') 
, env = process.env.NODE_ENV || 'development'
, config = require('./config/config')[env]
, mongoose = require('mongoose');
mongoose.connect(config.db);

AWS.config.loadFromPath('./config.json');
var app = express();

app.engine('html', require('hbs').__express);

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.set('view engine', 'hbs');
	app.set('views', __dirname + '/views');
	app.use(express.favicon(__dirname + '/public/favicon.ico'));
	app.use(express.logger('dev'));
	app.use(express.compress());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser());
	app.use(express.static(__dirname + '/public'));
	app.use(app.router);
	// app.use('/static', express.static(__dirname + '/public'));
});

app.configure('development', function() {
	app.use(express.errorHandler());
});


routes.requestRoutes(app);

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});