var path = require('path'), rootPath = path.normalize(__dirname + '/..');

module.exports = {
	development : {
		db : 'mongodb://composition:composition@127.0.0.1:27017/db_composition',
		root : rootPath,
		facebook : {
			clientID : '',
			clientSecret : '',
			callbackURL : ''
		},
		twitter : {
			clientID : '',
			clientSecret : '',
			callbackURL : ''
		},
		google : {
			clientID : '',
			clientSecret : '',
			callbackURL : ''
		}
	},
	test : {
		db : 'mongodb://faisanaUser1:faisana@ds061298.mongolab.com:61298/db_faisana',
		root : rootPath,
		facebook : {
			clientID : '',
			clientSecret : '',
			callbackURL : ''
		},
		twitter : {
			clientID : '',
			clientSecret : '',
			callbackURL : ''
		},
		google : {
			clientID : '',
			clientSecret : '',
			callbackURL : ''
		}
	},
	production : {}
};