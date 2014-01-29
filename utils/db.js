var mongo = require('mongodb');
/** The configuration for localhost*/
var setting = require('../config');
/** The configuration for server.*/
//var setting = require('../pro-config');
var Server = mongo.Server, DB = mongo.Db, BSON = mongo.BSONPure;

var server = new Server(setting.host, setting.port, {
	auto_reconnect : true
});
var db = new DB(setting.db, server,{safe:true});

db.open(function(err,data){
	if(data){
		data.authenticate(setting.username,setting.password,function(err,res){
			if(res){
				console.log('Database be opened.');
			}else{
				console.log(setting.username);
				console.log(err);
			}
		});
	}else{
		console.log(err);
	}
});
module.exports = db ;
