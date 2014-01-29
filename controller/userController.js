var User = require('../model/userEntity');
var Message = require('../utils/message');
var logs = require('../logger');

function getUser(user) {
	if (typeof user !== 'object') {
		return null;
	}
	var temp = {
		'username' : user.username,
		'email' : user.email,
		'website' : user.website,
		'country' : user.country,
		'_id' : user._id
	};
	return temp;
};


exports.main = function(req,res,next){
	var name = req.params.name ;
	User.findOne({name:name},function(err,doc){
		if(err){
			logs.logger.log('error','Can not find the user.the name of user is ' + name);
			next(err);
			res.redirect('/');
		}else{
			res.render('api-home.html');
		}
	}) ;
	
};

exports.login = function(req,res,next){
	var email = req.body.email ;
	var password = req.body.password ;
	
	User.findOne({email:email,password:password},function(err,doc){
		if(err){
			next(err);
		}else{
			if(doc){
				res.cookie('_current_user', doc.toString(), {domain : '192.168.0.100',path : '/',secure : true});
				res.send(new Message(true,'OK',getUser(doc)));
			}else{
				cosole.log('User Not Exists.');
			}
			
		}
	});
};

exports.list = function(req, res, next) {
	User.find({}, function(err, doc) {
		if (err) {
			next(err);
		} else {
			res.send(doc);
		}
	});
};

exports.findByUsername = function(req, res, next) {
	var name = req.params.name;
	console.log(name);
	User.find({
		name : name
	}, function(err, doc) {
		if (err) {
			logs.logger.log('error','find user error,the name is' + name + ',[exception:]' + err);
			next(err);
		} else {
			res.send(doc);
		};
	});
};

exports.save = function(req, res, next) {
	var name = req.body.name;
	var website = req.body.website;
	var email = req.body.email;
	var country = req.body.country;

	var oneUser = new User({
		username : name,
		email : email,
		website : website,
		country : country
	});
	oneUser.save(function(err, user) {
		if (err) {
			console.log('Error', err);
			next(err);
		} else {
			res.cookie('_current_user', user.toString(), {domain : '192.168.0.100',path : '/',secure : true});
			res.send(new Message(true,'OK',getUser(user)));
		}
	});
};
